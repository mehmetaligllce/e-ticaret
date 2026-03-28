# E-Commerce Platform (Fullstack)

Kullanıcıların ürünleri görüntüleyebildiği, sepete ekleyebildiği ve sipariş oluşturabildiği bir e-ticaret uygulaması. Admin kullanıcılar ürün yönetimi yapabilir. Uygulama frontend ve backend olarak fullstack şekilde geliştirilmiştir.

---

## Özellikler

- Kullanıcı kayıt, giriş ve çıkış sistemi  
- Session tabanlı kimlik doğrulama (cookie ile)  
- Ürün listeleme ve detay görüntüleme  
- Sepet sistemi (ekleme, silme, adet artırma)  
- Sipariş oluşturma ve sipariş geçmişi görüntüleme  
- Admin paneli (ürün ekleme ve silme)  
- Toplam fiyat hesaplama ve sipariş özeti  
- Global state yönetimi (Zustand)  

---

## Kullanılan Teknolojiler

Frontend:
- React  
- React Router  
- Axios  
- Zustand (state management)  

Backend:
- Node.js  
- Express  
- MongoDB  
- Mongoose  

Authentication:
- express-session  
- bcrypt  

---

## Mimari

- Frontend ve backend REST API üzerinden haberleşir  
- Authentication session ve cookie üzerinden yönetilir :contentReference[oaicite:0]{index=0}  
- Veritabanı işlemleri Mongoose ile gerçekleştirilir :contentReference[oaicite:1]{index=1}  
- Kullanıcı, ürün ve sipariş yapıları ayrı modeller ile yönetilir :contentReference[oaicite:2]{index=2}  

---

## Öne Çıkan Kısımlar

- Sepet yönetimi Zustand ile global state olarak tutulur :contentReference[oaicite:3]{index=3}  
- Kullanıcı oturumu session ve cookie ile yönetilir :contentReference[oaicite:4]{index=4}  
- Şifreler bcrypt ile hashlenir  
- Ürün CRUD işlemleri backend üzerinden yapılır :contentReference[oaicite:5]{index=5}  
- Sipariş oluşturma ve geçmiş listeleme sistemi bulunur :contentReference[oaicite:6]{index=6}  
- Admin kullanıcılar ürün ekleyip silebilir :contentReference[oaicite:7]{index=7}  

---

## Kazanımlar

- Fullstack uygulama geliştirme  
- REST API tasarımı  
- Session tabanlı authentication  
- Veritabanı modelleme (MongoDB)  
- State management (Zustand)  
- Gerçek dünya e-ticaret akışı  
