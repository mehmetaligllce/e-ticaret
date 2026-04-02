# E-Commerce Platform (Fullstack)

Kullanıcıların ürünleri görüntüleyebildiği, sepete ekleyebildiği ve sipariş oluşturabildiği bir e-ticaret uygulaması. Admin kullanıcılar ürün yönetimi yapabilir. Uygulama frontend ve backend olarak fullstack şekilde geliştirilmiştir.

---
## Siteye giriş için: https://renvstudio.com/
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
- Authentication session ve cookie üzerinden yönetilir 
- Veritabanı işlemleri Mongoose ile gerçekleştirilir
- Kullanıcı, ürün ve sipariş yapıları ayrı modeller ile yönetilir 

---

## Öne Çıkan Kısımlar

- Sepet yönetimi Zustand ile global state olarak tutulur 
- Kullanıcı oturumu session ve cookie ile yönetilir   
- Şifreler bcrypt ile hashlenir  
- Ürün CRUD işlemleri backend üzerinden yapılır 
- Sipariş oluşturma ve geçmiş listeleme sistemi bulunur  
- Admin kullanıcılar ürün ekleyip silebilir 
---

## Kazanımlar

- Fullstack uygulama geliştirme  
- REST API tasarımı  
- Session tabanlı authentication  
- Veritabanı modelleme (MongoDB)  
- State management (Zustand)  
- Gerçek dünya e-ticaret akışı  
