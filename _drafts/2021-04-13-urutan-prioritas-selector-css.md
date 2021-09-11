---
layout: post
title: "Urutan Prioritas Selector pada CSS"
date: 2021-04-13 17:23:00 +0700
cover: urutan-prioritas-selector-css.png
thumb: urutan-prioritas-selector-css.png
categories: css
---

Pernahkan kalian menulis sebuah kode css, tetapi tidak ada perubahan pada halaman website. Mungkin anda belum terlalu mengerti mengenai urutan prioritas selector pada CSS.

Karena sebuah elemen/tag pada HTMl dapat memiliki berbagai *stylesheet*, maka perlulah adanya prioritas untuk memilih style pada selector mana yang akan diterapkan pada elemen/tag HTML.

Lalu, bagaimana urutan prioritas selector pada CSS? Mari kita bahas.

## Berdasarkan Sumbernya

Pertama mari kita bahas urutan prioritas selector berdasarkan sumbernya.

Secara umum, kode css dapat berasal dari tiga sumber, yaitu *inline*, *internal*, dan *eksternal*.

Jika dilihat berdasarkan sumbernya urutan priorias selector pertama berasal dari *inline style*.

Urutan prioritas kedua dipilih berdasarkan baris mana dari *internal style* atau *eksternal style* yang paling bawah.

Contoh kasusnya adalah, ketika kita punya sebuah tag `h1` kemudian kita beri style pada tag tersebut lewat ketiga sumber tersebut, dengan kode property yang sama tapi nilainya berbeda.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Prioritas</title>

  <link rel="stylesheet" href="style.css">

  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
<body>
  
  <h1 style="color: red">Aku bukanlah prioritasnya :)</h1>

</body>
</html>
```

File `style.css`.

```css
h1 {
  color: green;
}
```

Apakah warna dari tag `h1`? merah? biru? atau hijau?

***

![Urutan Prioritas Berdasarkan Sumber]({{ site.baseurl }}/assets/img/urutan-prioritas-berdasarkan-sumber.png)

***

Jawabanya __merah__. Karena tag `h1` memiliki *inline style* yang membuatnya menjadi lebih diprioritaskan.

Sekarang kita hapus *inline style*-nya.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Prioritas</title>

  <link rel="stylesheet" href="style.css">

  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
<body>
  
  <h1>Aku bukanlah prioritasnya :)</h1>

</body>
</html>
```

File `style.css`

```css
h1 {
  color: green;
}
```

Apakah hijau atau biru yang akan muncul?

***

![Urutan Prioritas Internal Style]({{ site.baseurl }}/assets/img/urutan-prioritas-internal.png)

***

Warna biru yang muncul. Kenapa?

Karena *internal style* yaitu tag `style` ditulisan dibawah *eksternal style* yaitu tag `link`. 

Sekarang kita balik, tag `link` yang merupakan *eksternal style* kita taruh dibawah tag `style` yang merupakan *internal style*.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Prioritas</title>

  <style>
    h1 {
      color: blue;
    }
  </style>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <h1>Aku bukanlah prioritasnya :)</h1>

</body>
</html>
```

File `style.css`.

```css
h1 {
  color: green;
}
```

Warna apa yang akan muncul?

***

![Urutan Prioritas Eksternal Style]({{ site.baseurl }}/assets/img/urutan-prioritas-eksternal.png)

***

Warna hijau yang muncul karena penulisan tag `link` *eksternal style* berada dibawah tag `style` *internal style*.

## Berdasarkan Spesifikasi

Urutan prioritas selector berdasarkan spesifikasi dapat dihitung dengan rumus 4 digit, contoh 0,0,1,0.

Berikut nilai spesifikasi setiap selector.

* Element/Tag selector bernilai 0,0,0,1
* Class dan Atribut selector bernilai 0,0,1,0
* ID selector bernilai 0,1,0,0
* Inline style bernilai 1,0,0,0

Perhitunganya seperti hitung-hitungan pada umumnya, 0,1,0,0 lebih besar dari 0,0,1,0. Untuk lebih mudah membacanya, dapat disingkat dengan membuat komahnya, 0100 lebih besar dari 0010.

Contoh

```html
<!DOCTYPE html>
<html>
<head>
  <title>Prioritas</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <h1 class="judul">Aku bukanlah prioritasnya :)</h1>

</body>
</html>

```

File `style.css`

```css
h1 {
  color: green;
}
body h1 {
  color: blue;
}
.judul {
  color: red;
}
```

Apakah warna dari tag `h1`?.

***

![Urutan Prioritas Berdasarkan Spesifikasi]({{ site.baseurl }}/assets/img/urutan-prioritas-berdasarkan-sumber.png)

***

Hasilnya warnanya merah.

Mari kita hitung nilai spesifikasi setiap selectornya.

* selector `h1`, terdiri dari satu tag/element selector, nilainya 0,0,0,1
* selector `body h1`, terdiri dari satu tag/element selector, nilainya 0,0,0,2
* selector `.judul`, terdiri dari satu class selector, nilainya 0,0,1,0

Jadi, nilai terbesar diberikan kepada selector `.judul` dengan nilai 0010 yang membuat tag `h1`-nya menjadi berwarna merah.

## Perintah !important

Perintah ini merupakan perintah khusus dalam css.

Seperti namanya, perintah ini berfungsi untuk memberikan prioritas khusus/terpenting pada property yang ada di selector.

Dengan perintah ini walau nilai spesifikasinya lebih kecil, atau sumbernya lebih rendah, stylenya akan tetap terpakai.

Penulisanya diletakan dibelakang value dari property yang akan dipentingkan.

Contoh

```html
<!DOCTYPE html>
<html>
<head>
  <title>Prioritas</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <h1 class="judul">Aku bukanlah prioritasnya :)</h1>

</body>
</html>

```

File `style.css`

```css
h1 {
  color: green !important;
}
body h1 {
  color: blue;
}
.judul {
  color: red;
}
```

Berikut hasilnya.

***

![Perintah Important]({{ site.baseurl }}/assets/img/urutan-prioritas-eksternal.png)

***

Karena property `color` pada tag `h1` diberi perintah `!important`, maka style tersebutlah yang akan dipakai.