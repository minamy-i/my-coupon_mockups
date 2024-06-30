// app.js

// ヘッダーを読み込む関数
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

// MetaMask接続の設定
function setupMetaMaskConnection() {
    const connectButton = document.getElementById('connectMetaMask');
    const connectionStatus = document.getElementById('connectionStatus');

    connectButton.addEventListener('click', async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // MetaMaskに接続を要求
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                connectionStatus.textContent = '接続済み';
                connectButton.disabled = true;
            } catch (error) {
                console.error('MetaMask接続エラー:', error);
                connectionStatus.textContent = '接続失敗';
            }
        } else {
            connectionStatus.textContent = 'MetaMaskがインストールされていません';
        }
    });
}

// ページタイトルを設定する関数（新規追加）
function setPageTitle() {
    const pageName = document.querySelector('main h1').textContent;
    document.title = `私のクーポン券 - ${pageName}`;
}

// ページ読み込み時にヘッダーを読み込む
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    setupMetaMaskConnection();
    setPageTitle(); // 新しく追加
});