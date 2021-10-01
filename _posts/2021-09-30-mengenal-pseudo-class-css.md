---
layout: post
title: "Mengenal Pseudo-class Selector Pada CSS"
date: 2021-10-01 13:00:00 +0700
cover: pseudo-class-selector-css.png
thumb: pseudo-class-selector-css.png
categories: css
---

[Pseudo-class]({{ page.url }}) - Selector pada CSS memiliki banyak jenis. Mulai dari selector biasa, selector combinator, dsb.

Salah satu jenis selector pada CSS adalah __Pseudo-class__ selector, yang akan kita pelajari pada postingan kali ini.

Kita akan belajar pseudo-class selector mulai dari mengenal definisinya hingga jenis dan penggunaanya.

Langsung saja, mari kita simak penjelasanya di bawah ini.

## Pengertian Pseudo-class Selector

Pseudo-class selector adalah selector yang digunakan untuk menentukan atau memberikan *style* pada __kondisi tertentu__ suatu elemen.

Contohnya ketika kita ingin membuat tag `<h1>` berubah warna ketika dilewati _mouse_, maka kita dapat menggunakan _pseudo class_ tipe `:hover`.

_Syntax_ atau penulisanya dengan tanda titik dua (:) setelah nama selectornya dan diikuti nama tipe _pseudo-class_-nya

```css
selector:pseudo-class {
  property: value;
}
```

Pseudo-class memiliki banyak jenis, masing-masing memiliki efek tertentu dan ketentuan kondisinya masing-masing.

Berikut daftar jenis pseudo-class beserta penjabaranya masing-masing:

### Hover

Pseudo-class ini digunakan untuk memberikan *style* pada elemen ketika dilewati mouse.

```css
a:hover {
  color: red;
}
```

Ketika mouse melewati tag `<a>`, warna teksnya akan berubah menjadi merah.

### Active

Pseudo-class ini digunakan untuk memberikan *style* pada elemen ketika diklik mouse.

```css
a:active {
  color: red;
}
```

Ketika mouse mengklik tag `<a>`, warna teksnya akan berubah menjadi merah.

### Focus

Pseudo-class ini digunakan untuk memberikan *style* pada elemen ketika sedang menjadi target fokus.

Pseudo-class ini hanya dapat diberikan kepada elemen yang dapat difokuskan, seperti `input`, `select`, `textarea`, dll.

```css
input:focus {
  background-color: red;
}
```

Ketika mouse sedang fokus atau mengisi `<input>` maka warna latar belakangnya berubah menjadi merah.

### First-child

Pseudo-class ini digunakan untuk memberi *style* pada elemen pertama dari induknya.

```html
<div>
  <p>First Child</p>
  <p>Second Child</p>
</div>
```

```css
p:first-child {
  color: red;
}
```

Hasilnya.

***

![First Child]({{ site.baseurl }}/assets/img/css/pseudo-class/first-child.png)

***

### Last Child

Pseudo-class ini digunakan untuk memberi *style* pada elemen terakhir dari induknya.

```html
<div>
  <p>First Child</p>
  <p>Last Child</p>
</div>
```

```css
p:last-child {
  color: red;
}
```

Hasilnya.

***

![Last Child]({{ site.baseurl }}/assets/img/css/pseudo-class/last-child.png)

***

### Nth Child

Pseudo-class ini digunakan untuk memberi *style* pada elemen berdasarkan nomor urut yang telah ditentukan dari induknya.

Nomor urutnya ditulis di dalam kurung buka tutup setelah nama _pseudo-class_-nya.

```html
<div>
  <p>First Child</p>
  <p>Second Child</p>
  <p>Third Child</p>
  <p>Fourth Child</p>
</div>
```

```css
p:nth-child(3) {
  color: red;
}
```

Hasilnya.

***

![Nth Child]({{ site.baseurl }}/assets/img/css/pseudo-class/nth-child.png)

***

### Not

Pseudo-class ini digunakan untuk memberi *style* pada elemen yang bukan elemen yang telah ditentukan.

```html
<h1>Judul</h1>
<p>Paragraf</p>
<p>Paragraf</p>
<p>Paragraf</p>
<p>Paragraf</p>
```

```css
p {
  color: blue;
}
:not(p) {
  color: red;
}
```

Hasilnya.

***

![Not]({{ site.baseurl }}/assets/img/css/pseudo-class/not.png)

***

## Referensi

Masih banyak jenis pseudo-class selector yang ada, untuk lebih lengkapnya silakan kunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_pseudo_classes.asp" target="_blank">CSS Pseudo Classes</a>