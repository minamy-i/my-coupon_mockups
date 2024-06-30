// return.js
document.addEventListener('DOMContentLoaded', () => {
    const returnForm = document.getElementById('returnForm');
    const couponIdInput = document.getElementById('couponId');
    const couponNameSpan = document.getElementById('couponName');
    const couponImage = document.getElementById('couponImage');

    couponIdInput.addEventListener('change', fetchCouponInfo);

    returnForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const couponId = couponIdInput.value;
        const returnAmount = document.getElementById('returnAmount').value;
        returnCoupons(couponId, returnAmount);
    });

    async function fetchCouponInfo() {
        const couponId = couponIdInput.value;
        // この部分は実際のバックエンド処理で置き換える必要があります
        // ここでは仮のデータを使用しています
        const couponName = `サンプルクーポン ${couponId}`;
        const couponImageUrl = "https://example.com/sample-coupon.jpg";

        couponNameSpan.textContent = couponName;
        couponImage.src = couponImageUrl;
    }

    async function returnCoupons(couponId, amount) {
        // この部分は実際のスマートコントラクト処理で置き換える必要があります
        console.log(`クーポンID: ${couponId}, ${amount}枚を返却中...`);

        // 返却処理のシミュレーション
        await new Promise(resolve => setTimeout(resolve, 2000));

        const returnDate = new Date().toISOString();
        const transactionHash = "0x" + Math.random().toString(16).substr(2, 40);

        console.log('返却完了');
        console.log('返却日時:', returnDate);
        console.log('返却トランザクション:', transactionHash);

        alert(`${amount}枚のクーポンが返却されました。\n返却日時: ${returnDate}\nトランザクション: ${transactionHash}`);
    }
});