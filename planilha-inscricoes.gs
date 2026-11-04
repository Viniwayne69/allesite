/**
 * Recebe as inscrições do site e grava uma linha por inscrição na planilha.
 * Colar em: planilha do Google > Extensões > Apps Script.
 */
const ABA = 'Inscrições';
const COLUNAS = ['Data', 'Treinamento', 'Nome', 'CPF', 'Telefone', 'Empresa'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    const aba = planilha.getSheetByName(ABA) || planilha.insertSheet(ABA);
    if (aba.getLastRow() === 0) {
      aba.appendRow(COLUNAS);
      aba.setFrozenRows(1);
      aba.getRange('A1:F1').setFontWeight('bold');
    }
    const p = e.parameter;
    // CPF e telefone como texto, para o Google não cortar zeros à esquerda.
    aba.getRange(aba.getLastRow() + 1, 1, 1, COLUNAS.length).setNumberFormat('@').setValues([[
      Utilities.formatDate(new Date(), 'America/Recife', 'dd/MM/yyyy HH:mm:ss'),
      p.treinamento || '',
      p.nome || '',
      p.cpf || '',
      p.telefone || '',
      p.empresa || '',
    ]]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
