---
layout: post
title: "Mengenal Pseudo-class dan Pseudo-element pada CSS"
date: 2021-04-11 20:16:00 +0700
cover: mengenal-pseudo-class-element-css.png
thumb: mengenal-pseudo-class-element-css.png
categories: css
---

Masih dibagian selector pada pembelajaran css, kali ini saya akan membahas tentan *pseudo-class* dan *pseudo-element*.

Keduanya merupakan selector lanjutan pada css, setelah sebelumnya kita sudah membahas [5 selector dasar]({{ site.url }}/mengenal-selector-css), kita masih perlu mempelajari selector ini karena cukup sering dijumpai pada penulisan kode css.

Lalu apasih kedua sudo-sudo tersebut? Mari kita lihat penjelasanya.

## Pseudo-class

Merupakan sebuah kode yang memberikan style pada selector di kondisi tertentu.

Contohnya ketika sebuah selector dilewati oleh mouse pengguna, maka kita dapat menggunakan pseudo-class `hover`.

Penulisannya dengan menambahkan titik dua kemudian diikuti nama pseudo-class-nya pada selector target.

Contoh.

```css
a {
  color: red;
}
a:hover {
  color: blue;
}
```

Pada kode diatas, tag `a` pada kondisi awal akan memiliki warna merah, ketika mouse pengguna melewati tag tersebut, maka tag tersebut akan berubah menjadi berwarna merah.

Pseoudo-class `hover`-lah yang bekerja pada kasus ini.

Berikut beberapa `pseudo-class` yang sering digunakan. 

* `hover`, bekerja ketika mouse pengguna melewati selector
* `active`, bekerja ketika pengguna mengklik selector
* `focus`, bekerja ketika mouse pengguna fokus di selector
* `first-child`, memilih element pertama didalam tag induk
* `last-child`, memilih element terakhir didalam tag induk
* `nth-child(nomor)`, memilih element yang dengan urutan nomer didalam tag induk
* `not(selector)`, memilih element yang bukan selector

## Pseudo-element

Merupakan sebuah kode yang memberikan style pada bagian selector tertentu.

Contohnya seperti ketika ingin memberikan style khusus pada huruf pertama dalam sebuah paragraf, maka kita dapat menggunakan pseudo-element `first-letter`.

Penulisanya dengan menambahkan 2 buah titik dua diikuti dengan nama pseudo-element-nya pada selector target.

Contoh.

```css
p::first-letter {
  font-size: 50px;
  color: red;
}
```

Hasilnya

***

![Pseudo Element]({{ site.baseurl }}/assets/img/pseudo-element-css.png)

***

Berikut beberapa `pseudo-class` yang sering digunakan.

* `first-letter`, memberikan style pada huruf pertama selector
* `first-line`, memberikan style pada baris pertama selector
* `before`, menambahkan sebuah elemen sebelum selector
* `after`, menambahkan sebuah elemen setelah selector