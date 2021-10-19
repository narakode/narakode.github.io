---
layout: post
title: "Belajar CSS : Mengenal Properti Display"
date: 2021-10-19 08:00:00 +0700
cover: properti-display-css.png
thumb: properti-display-css.png
categories: css
---

[Properti Display]({{ page.url }}) - Properti Display merupakan salah satu properti penting dalam mengatur tata letak elemen.

Properti ini mengatur bagaimana sebuah elemen ditampilkan berdasarkan nilai yang telah ditentukan.

Untuk lebih jelasnya, mari kita simak pembahasanya berikut.

## Mengenal Properti Display

Properti display adalah properti yang digunakan untuk mengatur bagaimana sebuah elemen **ditampilkan**.

Setiap elemen HTML memiliki nilai `display` _default (bawaan)_ berdasarkan jenisnya.

Misalnya elemen `<p>` secara default memiliki nilai **block**, artinya elemen tersebut akan tampil dalam **baris sendiri**, tidak menggabung dengan elemen sebelum atau sesudahnya.

Sedangkan elemen `<a>` secara default memiliki nilai **inline**, artinya elemen tersebut akan tampil dalam **baris yang sama** atau menyamping dengan elemen sebelum atau sesudahnya yang nilainya **inline** juga.

```html
<h1>H1 memiliki nilai display block</h1>
<p>Paragraf memiliki nilai display block</p>
<a>Link memiliki nilai display inline</a>
<b>Bold memiliki nilai display inline</b>
```

***

![Display]({{ site.baseurl }}/assets/img/css/display/display.png)

***

## Mengatur Properti Display

Properti display dapat diatur dengan nilai-nilai yang sudah disediakan, berikut di antaranya.

### Block

Nilai block berfungsi untuk mengatur elemen agar ditampilan __dalam baris sendiri__.

Elemen sebelum dan sesudahnya akan ditampilkan dalam baris yang baru.

Beberapa elemen HTML secara _default_ sudah bernilai `block`, seperti `h1`, `p`, `div`, dsb.

Contoh.

```html
<a href="https://google.com">Menuju ke Google</a>
<a href="https://facebook.com">Menuju ke Facebook</a>
```

```css
a {
  display: block;
}
```

***

![Block]({{ site.baseurl }}/assets/img/css/display/block.png)

***

### Inline

Nilai inline berfungsi untuk mengatur elemen agar ditampilan __dalam baris yang sama__ dengan elemen sebelum atau sesudahnya yang bernilai __inline__ juga.

Beberapa elemen HTML secara _default_ sudah bernilai `inline`, seperti `a`, `span`, `input`, dsb.

Contoh.

```html
<h1>Judul</h1>
<p>Paragraf berada di sisi judul</p>
```

```css
h1, p {
  display: inline;
}
```

***

![Inline]({{ site.baseurl }}/assets/img/css/display/inline.png)

***

Perlu diingat, ketika sebuah elemen bernilai `inline`, ia tidak bisa diberikan properti `padding`, `width`, dan `margin top bottom`.

### Inline-Block

Nilai inline-block adalah gabungan dari __inline__ dan __block__, elemen akan ditampilkan secara __inline__ atau satu baris, tapi sifatnya seperti __block__, bisa diatur ukuran `padding`, `width`, dan `margin`-nya.

Contoh.

```html
<h1>Judul</h1>
<p>Paragraf berada di sisi judul</p>
```

```css
h1, p {
  display: inline-block;
}
h1 {
  margin-top: 20px;
}
```


***

![Inline-Block]({{ site.baseurl }}/assets/img/css/display/inline-block.png)

***

### None

Nilai none befungsi untuk mengatur elemen agar tidak ditampilan.

Contoh.

```html
<h1>Judul</h1>
<p>Paragraf setelah judul yang hilang</p>
```

```css
h1 {
  display: none;
}
```


***

![None]({{ site.baseurl }}/assets/img/css/display/none.png)

***

## Referensi

Untuk pembahasan lebih lanjut, silakan kunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_display_visibility.asp" target="_blank">CSS Display Visibility</a>