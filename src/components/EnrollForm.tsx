'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

import { PLANILHA_INSCRICOES_URL as ENDPOINT } from '@/data/treinamentos';

type Status = 'idle' | 'sending' | 'done' | 'error';

function onlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

function maskCpf(value: string) {
  const d = onlyDigits(value).slice(0, 11);
  return d.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function maskPhone(value: string) {
  const d = onlyDigits(value).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function validCpf(value: string) {
  const d = onlyDigits(value);
  if (d.length !== 11 || /^(\d)\1{10}$/.test(d)) return false;
  const digit = (len: number) => {
    let sum = 0;
    for (let i = 0; i < len; i++) sum += Number(d[i]) * (len + 1 - i);
    const rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
  };
  return digit(9) === Number(d[9]) && digit(10) === Number(d[10]);
}

export function EnrollForm({ training }: { training: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ cpf?: string; phone?: string }>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('site')) return; // campo isca para robôs

    const next: { cpf?: string; phone?: string } = {};
    if (!validCpf(cpf)) next.cpf = 'Confira o CPF: ele parece incorreto.';
    if (onlyDigits(phone).length < 10) next.phone = 'Informe o telefone com DDD.';
    setErrors(next);
    if (next.cpf || next.phone) return;

    setStatus('sending');
    try {
      await fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: new URLSearchParams({
          nome: String(data.get('nome') ?? '').trim(),
          cpf,
          telefone: phone,
          empresa: String(data.get('empresa') ?? '').trim(),
          treinamento: training,
        }),
      });
      setStatus('done');
      form.reset();
      setCpf('');
      setPhone('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return <div className="enroll enroll-done" role="status">
      <h3>Uhul, sua vaga está a caminho!</h3>
      <p>Recebemos os seus dados para o treinamento <strong>{training}</strong> e estamos muito animadas em ter você com a gente! Em breve entramos em contato pelo WhatsApp</p>
      <button type="button" className="btn" onClick={() => setStatus('idle')}>Enviar outra inscrição</button>
    </div>;
  }

  return <form className="enroll" onSubmit={submit} noValidate>
    <label>Nome completo
      <input name="nome" type="text" autoComplete="name" required minLength={3} />
    </label>
    <label>CPF
      <input name="cpf" type="text" inputMode="numeric" autoComplete="off" required value={cpf} onChange={(e) => setCpf(maskCpf(e.target.value))} placeholder="000.000.000-00" aria-invalid={!!errors.cpf} />
      {errors.cpf && <span className="enroll-error">{errors.cpf}</span>}
    </label>
    <label>Telefone (WhatsApp)
      <input name="telefone" type="tel" inputMode="tel" autoComplete="tel" required value={phone} onChange={(e) => setPhone(maskPhone(e.target.value))} placeholder="(00) 00000-0000" aria-invalid={!!errors.phone} />
      {errors.phone && <span className="enroll-error">{errors.phone}</span>}
    </label>
    <label>Empresa
      <input name="empresa" type="text" autoComplete="organization" required />
    </label>
    <input className="enroll-trap" name="site" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <p className="enroll-lgpd">Usamos esses dados apenas para a sua inscrição neste treinamento e para entrar em contato sobre ele.</p>
    {status === 'error' && <p className="enroll-error" role="alert">Não foi possível enviar agora. Confira a conexão e tente de novo.</p>}
    <button type="submit" className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando...' : 'Enviar inscrição'}</button>
  </form>;
}
