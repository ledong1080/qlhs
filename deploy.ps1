Write-Host "🔄 Đang xóa thư mục dist..."
Remove-Item -Recurse -Force dist -ErrorAction SilentlyContinue

Write-Host "🏗️ Đang build dự án..."
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "🚀 Build thành công, bắt đầu deploy..."
    npm run deploy
} else {
    Write-Host "❌ Build thất bại, không thể deploy." -ForegroundColor Red
}
