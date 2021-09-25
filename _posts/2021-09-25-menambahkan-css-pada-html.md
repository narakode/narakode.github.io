---
layout: post
title: "3 Cara Menambahkan CSS Pada HTML"
date: 2021-09-25 08:00:00 +0700
cover: menambahkan-css-pada-html.png
thumb: menambahkan-css-pada-html.png
categories: css
---

[Menambahkan CSS]({{ page.url }}) - Untuk menggunakan CSS, CSS perlu ditambahkan ke dalam HTML agar dapat digunakan.

Terdapat 3 cara untuk menambahkanya, yaitu __inline style__, __internal style__, dan __external style__.

Tiap-tiap cara tersebut memiliki langkah dan penggunaanya masing-masing, berikut penjabaranya.

## Inline Style

*Inline style* adalah cara penambahan css langsung pada tag yang akan diberi gaya atau *style*.

Caranya yaitu dengan menambahkan atribut `style` pada tag yang dituju, kemudian diisi dengan kode css-nya.

Contoh.

```html
<h1 style="color: red">Inline style CSS</h1>
```

Pada kenyataanya, penggunaan cara ini cukup jarang digunakan dibandingkan cara lainya.

Karena pada cara ini, kode css yang ditulis hanya dapat digunakan pada tag yang dituju saja.

Jika kita memiliki lebih dari satu tag `h1` dan kita ingin membuat setiapnya berwarna merah, maka kita harus menuliskan kode *inline style* yang sama pada setiap tag.

Cara ini tentunya kurang praktis.

Untuk lebih baiknya, gunakan dua cara berikutnya.

## Internal Style

*Internal Style* adalah cara penambahan css pada tag `<style>` didalam tag `<head>`.

Cara ini memisahkan kode css dengan elemen yang dituju. Dinamakan *internal* karena penulisanya masih di dalam dokumen HTML yang sama.

Contoh.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Apa Itu CSS</title>

  <style>
    h1 {
      color: red;
    }
  </style>
</head>
<body>
  
  <h1>Internal style CSS</h1>

</body>
</html>
```

Cara ini cukup praktis, karena jika kita ingin memerikan warna merah pada setiap tag `h1`, kita hanya perlu menuliskan kode css satu kali saja.

Tapi cara ini masih kurang praktis jika kita memiliki beberapa halaman, dan setiap halaman memiliki style css yang sama, maka kita harus menuliskan kode css yang sama berulang di setiap halaman tersebut.

Untuk kasus itu gunakan cara berikutya.

## Eksternal Style

*Eksternal Style* adalah cara penambahan CSS dengan memisahkan file HTML dan file CSS. Kode css dituliskan di dalam file css sendiri, kemudian dihubungkan ke dokumen HTML. 

Untuk menghubungkanya kita dapat menggunakan tag `link` pada tag `style` di dalam tag `head`.

Jangan lupa menambahkan beberapa atribut `rel` dan atribut `href`.

Atribut `rel` diisi dengan nilai `stylesheet` dan atribut `href` diisi dengan file css-nya.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Apa Itu CSS</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <h1>Eksternal style CSS</h1>

</body>
</html>
```

Kita juga dapat menambahkan beberapa file css sekaligus pada sebuah file HTML. Contohnya disini saya menambahkan file css dari *bootstrap*.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Apa Itu CSS</title>

  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css">
</head>
<body>
  
  <h1>Eksternal style CSS</h1>

</body>
</html>
```

Dengan menggunakan cara ini, kita tidak perlu menuliskan kode css yang sama pada setiap file HTML, cukup membuat satu file css lalu memanggilnya pada file HTML yang membutuhkan.