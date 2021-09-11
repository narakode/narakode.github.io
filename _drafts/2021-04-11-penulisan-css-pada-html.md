---
layout: post
title: "3 Cara Penulisan CSS Pada HTML"
date: 2021-04-11 13:41:00 +0700
cover: penulisan-css-pada-html.png
thumb: penulisan-css-pada-html.png
categories: css
---

Dalam menuliskan CSS kita perlu menghubungkanya ke dalam HTML agar CSS tersebut dapat terpakai.

Terdapat 3 cara untuk menuliskanya ke dalam HTML, yaitu __inline style__, __internal style__, dan __external style__.

## Inline Style

Sesuai namanya, inline style berarti menuliskan css langsung di tag yang akan diberi style.

Caranya yaitu dengan memberikan atribut `style` yang diisi dengan kode css-nya.

Contoh.

```html
<h1 style="color: red">Inline style CSS</h1>
```

Penggunaan cara ini cukup jarang digunakan dibandingkan cara lainya.

Karena kode css yang ditulis hanya dapat digunakan pada tag yang dituju saja.

Jika kita memiliki lebih dari satu tag `h1` dan kita ingin membuat setiapnya berwarna merah, maka kita harus membuat inline style disetiap tag.

Cara ini tentunya kurang praktis.

## Internal Style

Cara ini digunakan dengan memisahkan kode css dengan tag yang dituju, tapi masih di satu file HTML.

Penulisanya di tag `style` didalam tag `head`.

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

Namun masih kurang praktis karena jika kita memiliki beberapa halaman dan setiap halaman memiliki style css yang sama, maka kita harus menuliskan kode css yang sama disetiap halaman tersebut.

## Eksternal Style

Cara ini merupakan cara yang paling sering digunakan dalam penulisan kode css.

Penulisanya adalah dengan memisahkan file HTML dan file CSS. Dan tinggal menghubungkan file css tersebut ke file HTMl.

Untuk menghubungkanya kita dapat menggunakan tag `link` didalam tag `style` pada tag `head`.

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

Kita juga dapat menambahkan banyak file css pada sebuah file HTML. Contohnya disini saya menambahkan file css dari *bootstrap*.

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

Dengan menggunakan cara ini, kita tidak perlu menuliskan kode css yang sama di setiap file HTML, cukup membuat satu file css lalu memanggilnya di file HTML yang membutuhkan.