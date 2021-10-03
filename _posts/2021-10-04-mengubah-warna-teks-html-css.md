---
layout: post
title: "Cara Mengubah Warna Teks HTML Dengan CSS"
date: 2021-10-04 06:00:00 +0700
cover: warna-teks-css.png
thumb: warna-teks-css.png
categories: css
---

[Mengubah Warna Teks HTML]({{ page.url }}) - Warna merupakan salah satu elemen penting dalam __desain web__.

Warna berfungsi sebagai *branding* dari sebuah halaman web.

Untuk itu penggunaan warna sangat diperlukan dalam pembuatan halaman web.

Dan pada postingan kali ini, saya akan membagikan postingan mengenai cara mengubah warna teks HTML dengan CSS.

Langsung saja berikut langkah-langkahnya.

## Mengubah Warna Dengan CSS

Property yang digunakan untuk mengubah warna adalah `color`, yang diisi dengan nilai nama/kode warnanya.

```css
body {
  color: red;
}
h1 {
  color: green;
}
```

***

![Property Color]({{ site.baseurl }}/assets/img/css/color/color.png)

***

### Jenis Warna Pada CSS

Pada contoh diatas, saya menggunakan nama warna sebagai nilai dari property `color`. Pada CSS terdapat cara lain selain dengan nama warna untuk mengisi nilai property `color`.

Berikut jenis warna yang ada pada CSS:

* Color Names (Nama warnanya)
* RGB Color (Red, Green, Blue)
* HEX Color (Warna yang menggunakan bilangan heksadesimal, #RRGGBB)
* HSL Color (Hue, Saturation, Lightness)

Untuk penjelasan lebih lanjut mengenai jenis warna akan saya jelaskan pada postingan selanjutnya.

### Mengubah Warna Huruf Pertama

Untuk mengubah warna huruf pertama, kita dapat memanfaatkan _pseudo-element selector_ `first-letter` yang diberikan kepada elemen yang dituju.

```css
body {
  color: blue;
}
h1 {
  color: green;
}
h1::first-letter {
  color: red;
}
```

***

![First Letter Color]({{ site.baseurl }}/assets/img/css/color/first-letter-color.png)

***

## Mengubah Warna Baris Pertama

Untuk mengubah warna baris pertama, kita dapat memanfaatkan _pseudo-element selector_ `first-line` yang diberikan kepada elemen yang dituju.

```css
body {
  color: blue;
}
h1 {
  color: green;
}
p::first-line {
  color: red;
}
```

***

![First Line Color]({{ site.baseurl }}/assets/img/css/color/first-line-color.png)

***

Pada contoh di atas saya menggunakan _pseudo-element selector_ yang penjelasanya ada pada postingan sebelumnya.

[Mengenal Pseudo-element Selector Pada CSS](https://www.narakode.com/mengenal-pseudo-element-css)

## Referensi

Untuk lebih lengkapnya, anda dapat mengunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_colors.asp" target="_blank">CSS Colors</a>