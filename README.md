# WhatsApp BOT Multi Device Pairing Code - NodeJs
Contoh skrip bot WhatsApp, menggunakan perpustakaan WhatsApp Web API

## Instalasi
### Instal Perangkat Lunak/Paket-Paket
#### Untuk Linux
```bash
sudo apt-get install nodejs
sudo apt-get install git
sudo apt-get install npm
sudo apt-get install yarn
```

#### Untuk Windows
```bash
choco install nodejs
choco install git
choco install yarn
```

#### Untuk MacOS
```bash
brew install node
brew install git
brew install yarn
```

#### Untuk Android (Termux)
```bash
pkg install nodejs
pkg install git
pkg install yarn
```

### Download/Klon Proyek
```bash
git clone https://github.com/danitechid/chatgpt-wa-bot-script.git
```

### Pindah Direktori (CD)
```bash
cd chatgpt-wa-bot-script
```

### Application Programming Interface (API)
#### Dapatkan Kunci API
Daftar dan dapatkan kunci API:
1. <a href="https://daniapi.biz.id">https://daniapi.biz.id</a>
2. <a href="https://api.caliph.biz.id">https://api.caliph.biz.id</a>

#### Edit ./config/settings.js > api
```javascript
api: {
  ...
  key: 'Your_API_key' // Registrasi disini: https://daniapi.biz.id/#sign-up
}
```

### Instal Dependensi
#### Menggunakan Npm
```bash
npm install
```
#### Atau Menggunakan Yarn
```bash
yarn install
```

### Jalankan Server
#### Menggunakan Npm
```bash
npm run start
```

#### Atau Menggunakan Yarn
```bash
yarn run start
```

#### Atau Menggunakan Node
```bash
node run start
```

#### Atau Menggunakan Bun
```bash
bun run start
```

## Informasi
* Pembuat / Pengembang: Dani Ramdani (Dani Techno.) - FullStack Engineer
* Kontak Pembuat / Pengembang: 0895 1254 5999 (WhatsApp), contact@danitechno.com (Email)

## Terimakasih Kepada
* Dani Techno. - FullStack Engineer (Pembuat / Pengembang)
* daniapi.biz.id (Penyedia API)
* @danitech/wa-web-api (Penyedia Library "WhatsApp Web API")
