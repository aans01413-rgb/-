// 1️⃣ الإمساك بعنصر الزر من صفحة HTML
const copyBtn = document.getElementById('copyBtn');

// 2️⃣ إضافة حدث عند النقر (Click)
copyBtn.addEventListener('click', () => {
    // نسخ رابط الصفحة الحالي للذاكرة
    navigator.clipboard.writeText(window.location.href);

    // تغيير نص الزر لإعلام المستخدم بالنجاح
    copyBtn.innerHTML = '<i class="fas fa-check"></i> تم نسخ الرابط!';

    // 3️⃣ إعادة النص الأصلي بعد ثانتين
    setTimeout(() => {
        copyBtn.innerHTML = '<i class="fas fa-share-alt"></i> مشاركة الملف الشخصي';
    }, 2000);
});