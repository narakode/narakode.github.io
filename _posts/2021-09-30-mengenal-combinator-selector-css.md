---
layout: post
title: "Mengenal Combinator Pada Selector CSS"
date: 2021-09-30 08:00:00 +0700
cover: mengenal-combinator-selector-css.png
thumb: mengenal-combinator-selector-css.png
categories: css
---

[Combinator Pada Selector]({{ page.url }}) - Selector adalah pemilih atau pencari elemen pada HTML yang akan diberi style css.

Selector ada banyak jenisnya, untuk kalian yang baru mengenal selector, bisa baca terlebih dahulu pada postingan sebelumnya mengenai 5 macam selector pada CSS.

[Mengenal 5 Macam Selector Pada CSS](https://www.narakode.com/mengenal-selector-css)

Dan kali ini saya masih akan membahas mengenai selector CSS, yaitu __combinator__. Untuk lebih lanjutnya mari kita simak pembahasan berikut.

## Pengertian Combinator

Combinator adalah kode CSS yang menjelaskan hubungan antar selector.

Sebuah selector dapat berisi lebih dari satu selector. Untuk menjelaskan hubungan antar selector-nya kita dapat menggunakan __combinator__.

Contoh penggunaan combinator adalah ketika kita ingin memilih semua tag `<h1>` yang berada di dalam tag `<div>`.

Untuk melakukanya gunakan combinator jenis `descendant selector` atau selector jenis turunan.

Terdapat 4 tipe combinator, yaitu:

* descendant selector (`spasi`)
* child selector (`>`)
* adjacent sibling selector (`+`)
* general sibling selector (`~`)

Berikut penjelasanya masing-masing:

### Descendant Selector / Selector Turunan

Descendant Selector digunakan untuk memilih semua elemen yang merupakan turunan dari elemen yang telah ditentukan.

Misalnya ada tag `<h1>` di dalam tag `<div>`. Maka tag `<h1>` tersebut merupakan turunan dari tag `<div>`, dan untuk memilih `<h1>` tersebut kita dapat menggunakan *descendant selector*.

Descendant selector ditandai dengan `spasi` di antara nama selectornya. 

Contoh kode HTML.

```html
<div>
  <h1>Judul Satu</h1>
  <h1>Judul Dua</h1>
</div>

<h1>Judul Tiga Diluar</h1>
```

```css
div h1 {
  color: red;
}
```

Hasilnya.

***

![Descendant Selector]({{ site.baseurl }}/assets/img/css/combinator/descendant-selector.png)

***

Karena judul tiga berada diluar tag `<div>`, maka judul tersebut bukanlah turunan `<div>` dan tidak terkena perubahan _style_.

### Child Selector / Selector Anak

Child Selector digunakan untuk memilih semua elemen yang merupakan anak dari elemen yang telah ditentukan.

Berbeda dengan *descendant selector* yang memilih semua elemen di dalamnya, *child selector* hanya memilih elemen yang berada di dalamnya **secara langsung** dan tidak berada di dalam elemen lain.

Perbedaan secara harfiahnya child itu **anak**, descendant itu **turunan**.

Penulisanya dengan menambahkan simbol lebih dari (`>`) di antara selectornya. 

Berikut contohnya.

```html
<div>
  <p>Paragraf anak dari induk div</p>
  <nav>
    <p>Bukan anak dari dari induk div</p>
  </nav>
</div>
```

```css
div > p {
  color: red
}
```

Hasilnya.

***

![Child Selector]({{ site.baseurl }}/assets/img/css/combinator/child-selector.png)

***

Paragraf kedua merupakan turunan `<div>` tapi bukan anak dari `<div>`, tepatnya anak dari `<nav>`. Oleh karena itu paragraf kedua tidak terkena perubahan _style_.

### Adjacent Sibling Selector

Adjacent Sibling Selector digunakan untuk memilih elemen yang berada tepat di sebelah elemen yang telah ditentutakan.

Elemen target harus berada di satu induk yang sama dengan elemen yang ditentukan.

Penulisanya dengan simbol tambah (`+`).

Contoh.

```html
<div>
  <p>Paragraf di dalam div</p>
  <p>Paragraf</p>
</div>

<p>Paragraf setelah div</p>
<p>Paragraf setelah parafraf</p>
```

```css
div + p {
  color: red
}
```

Hasilnya.

***

![Adjacent Sibling Selector]({{ site.baseurl }}/assets/img/css/combinator/adjacent-sibling-selector.png)

***

Paragraf yang berada tepat disebelah tag `<div>` adalah yang ketiga. Maka dari itu hanya dialah yang terkena perubahan _style_.

### General Sibling Selector

General Sibling Selector digunakan untuk memilih semua elemen yang berada di sebelah elemen yang telah ditentukan.

Beda dengan *adjacent sibling* yang hanya memilih elemen yang tepat di sebelahnya, *general sibling* **memilih semua elemen** yang berada di sebelahnya.

Penulisanya dengan simbol (`~`).

Contoh.

```html
<div>
  <p>Paragraf di dalam div</p>
  <p>Paragraf</p>
</div>

<p>Paragraf setelah div</p>
<p>Paragraf setelah div</p>
```

```css
div ~ p {
  color: red
}
```

Hasilnya.

***

![General Sibling Selector]({{ site.baseurl }}/assets/img/css/combinator/general-sibling-selector.png)

***

Paragraf ketiga dan keempat berada di sebelah `<div>` merekapun terkena perubahan _style_.

## Referensi

Untuk penjelasan lebih lengkap mengenai combinator pada CSS, silakan kunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_combinators.asp" target="_blank">CSS Combinators</a>