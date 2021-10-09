---
layout: post
title: "Cara Menggunakan Font Eksternal dengan CSS"
date: 2021-10-09 12:00:00 +0700
cover: menggunakan-font-eksternal-css.png
thumb: menggunakan-font-eksternal-css.png
categories: css
---

[Font Eksternal]({{ page.url }}) - Sebelumnya kita sudah membahas tentang cara menggunakan font yang terinstal pada komputer dan Google Font.

Kali ini kita akan belajar mengenai cara menggunakan font eksternal dengan CSS.

Sebelum masuk ke langkah-langkahnya, mari kita simak penjelasan mengenai font eksternal berikut.

## Apa Itu Font Eksternal

Font Eksternal pada CSS adalah font yang **tidak terinstall** pada komputer.

Font Eksternal digunakan untuk menggunakan font tertentu pada halaman web tanpa perlu menginstalnya pada komputer.

Terdapat beberapa jenis format font eksternal yang dapat digunakan pada web.

* EOT (Hanya digunakan pada *browser Internet Explorer*)
* SVG (Hanya digunakan pada *browser Safari*)
* TTF/OTF (Dapat digunakan pada semua *browser*)
* WOFF (Dapat digunakan pada semua *browser*, ukuranya lebih kecil daripada `TTF/OTF`)
* WOFF2 (Dapat digunakan pada semua *browser*, ukuranya lebih kecil daripada `WOFF`)

## Menggunakan Font Eksternal Dengan CSS

Langsung saja berikut langkah-langkah menggunakan __font eksternal__ pada CSS.

### Mempersiapkan Font

Persiapkan font eksternal yang akan digunakan, pastikan formatnya sesuai dengan yang dijelaskan diatas, dan pastikan berada di direktori yang sama dengan file CSS yang akan digunakan.

***

![Direktori Font]({{ site.baseurl }}/assets/img/css/font-eksternal/direktori.png)

***


### Memasukan Font Pada CSS

Untuk memasukan font yang sudah disiapkan ke CSS, gunakan perintah __@font-face__.

Berikut _syntax_-nya.

```css
@font-face {
  font-family: 'Nama Font';
  src: url('nama-file-font.ttf');
}
```

Dan berikut implementasi kodenya.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Font Eksternal</title>

  <style>
    @font-face {
      font-family: 'The Shape Of Things';
      src: url('The Shape Of Things.otf');
    }

    h1 {
      font-family: 'The Shape Of Things';
    }
  </style>
</head>
<body>

  <h1>Font Eksternal</h1>

</body>
</html>
```

Hasilnya.

***

![Implementasi]({{ site.baseurl }}/assets/img/css/font-eksternal/implementasi.png)

***

## Referensi

Untuk penjelasan lebih lengkap anda dapat mengunjungi tautan berikut.

<a href="https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp" target="_blank">CSS Font-Face Rule</a> 