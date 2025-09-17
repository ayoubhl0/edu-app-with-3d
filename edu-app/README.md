# Edu App (Django + React/Vite)

مشروع جاهز كبنية أساسية لتطبيق تعليمي تفاعلي.

## التشغيل

### 1) Backend (Django)
```bash
cd backend
 # على ويندوز: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # اختياري
python manage.py runserver 0.0.0.0:8000
```

المسارات المتاحة:
- `/words/`
- `/rewards/`

### 2) Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```

خلال التطوير، الطلبات إلى `/api/*` ستمر عبر بروكسي Vite إلى Django على 8000.

## ملاحظات
- يمكنك إضافة كلمات أولية من لوحة الإدارة أو عبر API.
- للتكامل مع AR على الويب، جرّب مكتبات مثل: `@google/model-viewer` أو `mind-ar-js`.
