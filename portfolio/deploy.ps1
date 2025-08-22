# Script PowerShell para build e deploy de projeto Vite
# Edite as variáveis de FTP conforme necessário

# Caminho do projeto
$projectPath = "$(Resolve-Path .)"

# Comando de build do Vite
Write-Host "Iniciando build do Vite..."
npm install
npm run build

# Configurações de FTP (edite conforme necessário)
$ftpServer = "ftp.seuservidor.com"
$ftpUser = "usuario"
$ftpPass = "senha"
$remotePath = "/public_html/"
$localDist = "$projectPath/dist/*"

# Envio dos arquivos via FTP (requer WinSCP instalado)
Write-Host "Enviando arquivos para o servidor FTP..."
& "C:\Program Files (x86)\WinSCP\WinSCP.com" /command "open ftp://$ftpUser:$ftpPass@$ftpServer/" "option transfer binary" "put $localDist $remotePath" "exit"

Write-Host "Deploy finalizado!"
