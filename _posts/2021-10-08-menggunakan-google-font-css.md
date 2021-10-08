---
layout: post
title: "Cara Menggunakan Google Font Dengan CSS"
date: 2021-10-08 09:00:00 +0700
cover: menggunakan-google-fonts-css.png
thumb: menggunakan-google-fonts-css.png
categories: css
---

[Google Font]({{ page.url }}) - Font merupakan salah satu elemen penting dalam desain web.

Namun sayangnya penggunaan font pada web memiliki batas-batas tertentu, salah satunya adalah __jenis font__ yang dapat digunakan.

Font yang dapat digunakan pada halaman web adalah font yang sudah terinstal pada komputer.

Daripada repot-repot menginstal satu persatu font yang ingin digunakan, terdapat satu solusi yang dapat digunakan yaitu menggunakan layanan __Google Font__.

Langsung saja mari kita simak apa itu dan cara menggunakan Google Font.

## Apa Itu Google Font

Google Font adalah layanan dari Google yang menyediakan berbagai font siap pakai secara gratis.

Pada saat artikel ini ditulis, terdapat __1284 jenis font__ yang tersedia pada Google Font.

Untuk menikmatinya anda bisa mengunjungi alamat [https://fonts.google.com](https://fonts.google.com).

## Cara Menggunakan Google Font

Berikut adalah langkah-langkah menggunakan google font dengan CSS:

### Memilih Font

Setelah membuka [https://fonts.google.com](https://fonts.google.com), anda akan disuguhi daftar macam-macam font yang dapat digunakan.

Pilih font yang akan anda inginkan dengan cara menekan kotak font-nya.

***

![Memilih Font]({{ site.baseurl }}/assets/img/css/google-font/beranda.png)

***

Anda akan diarahkan ke halaman detail font, pilih ketebalan dan gaya font yang anda inginkan dengan cara menekan tulisan **select this style**.

***

![Detail Font]({{ site.baseurl }}/assets/img/css/google-font/detail-font.png)

***

Anda juga dapat memilih lebih dari satu font.

### Menyalin Kode Link Font

Setelah memilih font akan muncul _sidebar_ yang berisi kode link font untuk dipasangkan pada halaman web.

***

![Kode Font]({{ site.baseurl }}/assets/img/css/google-font/kode-font.png)

***

Salin kode tersebut, kemudian buka file HTML dan tempelkan di dalam tag `head`.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Google Font</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet"> 
</head>
<body>

  <h1>Google Font</h1>
  <p>Google Font keren sekali</p>

</body>
</html>
```

### Menyalin Kode CSS Font

Salin juga kode kode CSS yang terletak dibawahnya.

***

![Kode CSS]({{ site.baseurl }}/assets/img/css/google-font/kode-css.png)

***

Masukan kedalam CSS, disini saya menggunakan cara `internal stylesheet`.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Google Font</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet"> 

  <style>
    body {
      font-family: 'Oswald', sans-serif;
    }
  </style>
</head>
<body>

  <h1>Google Font</h1>
  <p>Google Font adalah layanan dari Google yang menyediakan berbagai font siap pakai secara gratis.</p>

</body>
</html>
```

### Hasilnya

***

![Google Font]({{ site.baseurl }}/assets/img/css/google-font/hasilnya.png)

***

## Kesimpulan

Selain digunakan langsung, font pada Google Font juga dapat diunduh ke komputer anda.