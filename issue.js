// issue.js
document.addEventListener('DOMContentLoaded', () => {
    // クーポン情報の取得（実際はサーバーから取得）
    fetchCouponInfo();

    document.getElementById('issueForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const issueAmount = document.getElementById('issueAmount').value;
        issueCoupons(issueAmount);
    });
});

function fetchCouponInfo() {
    // この部分は実際のバックエンド処理で置き換える必要があります
    const couponId = Math.floor(Math.random() * 1000000);
    const couponName = "サンプルクーポン";
    const couponImageUrl = "https://example.com/sample-coupon.jpg";

    document.getElementById('couponId').textContent = couponId;
    document.getElementById('couponName').textContent = couponName;
    document.getElementById('couponImage').src = couponImageUrl;
}

async function issueCoupons(amount) {
    // この部分は実際のスマートコントラクト処理で置き換える必要があります
    console.log(`${amount}枚のクーポンを発行中...`);

    // 発行処理のシミュレーション
    await new Promise(resolve => setTimeout(resolve, 2000));

    const issuedDate = new Date().toISOString();
    const transactionHash = "0x" + Math.random().toString(16).substr(2, 40);

    console.log('発行完了');
    console.log('発行日時:', issuedDate);
    console.log('発行トランザクション:', transactionHash);

    alert(`${amount}枚のクーポンが発行されました。\n発行日時: ${issuedDate}\nトランザクション: ${transactionHash}`);
}