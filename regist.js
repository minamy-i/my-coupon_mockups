// regist.js
document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const preview = document.getElementById('preview');
    const couponIdInput = document.getElementById('couponId');
    let file;

    // クーポンIDの取得と表示（実際はサーバーから取得）
    fetchNextCouponId();

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.backgroundColor = '#e1e1e1';
    });

    dropZone.addEventListener('dragleave', (e) => {
        dropZone.style.backgroundColor = '';
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.backgroundColor = '';
        file = e.dataTransfer.files[0];
        displayPreview(file);
    });

    function displayPreview(file) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        } else {
            alert('画像ファイルをドロップしてください。');
        }
    }

    document.getElementById('registForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const couponName = document.getElementById('couponName').value;
        console.log('クーポンID:', couponIdInput.value);
        console.log('クーポン名称:', couponName);
        console.log('画像ファイル:', file);
        alert('クーポンが登録されました（実際の処理は未実装）');
    });

    // 次のクーポンIDを取得する関数（実際はサーバーから取得）
    function fetchNextCouponId() {
        // この部分は実際のバックエンド処理で置き換える必要があります
        const fakeNextId = Math.floor(Math.random() * 1000000);
        document.getElementById('couponId').textContent = fakeNextId;
    }
});