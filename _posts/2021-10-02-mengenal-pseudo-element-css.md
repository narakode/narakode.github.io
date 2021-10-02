---
layout: post
title: "Mengenal Pseudo-element Selector Pada CSS"
date: 2021-10-02 09:00:00 +0700
cover: pseudo-element-selector-css.png
thumb: pseudo-element-selector-css.png
categories: css
---

[Pseudo-element]({{ page.url }}) - Selector pada CSS memiliki banyak jenis. Mulai dari selector biasa, selector combinator, dsb.

Salah satu jenis selector pada CSS adalah __pseudo-element selector__. Yang akan kita pelajari pada postingan ini.

Langsung saja mari kita simak penjelasan mengenai pseudo-element selector.

## Pengertian Pseudo-element Selector

Pseudo-element Selector adalah selector yang digunakan untuk menentukan atau memberikan _style_ pada __bagian terentu__ suatu elemen.

Contohnya pseudo-element dapat digunakan untuk:

* Memberikan style pada huruf, baris, atau karakter pertama sebuah elemen.
* Menambah konten sebelum atau setelah elemen.

## Syntax

Pseudo-element dibuat dengan tanda dua titik dua (`::`) yang diletakan di antara nama selector dan nama pseudo-element.

```css
selector::pseudo-element {
  property: value;
}
```

## Macam-macam Pseudo-element

Ada bermacam-macam jenis pseudo-element, berikut beberapa di antaranya.

### first-letter

Digunakan untuk memberikan _style_ pada karakter/huruf pertama suatu elemen.

```html
<p>
  Setiap kali aku melihatmu, aku jatuh cinta lagi.
</p>
```

```css
p::first-letter {
  font-size: 44px;
  color: red;
}
```

Hasilnya.

***

![First Letter]({{ site.baseurl }}/assets/img/css/pseudo-element/first-letter.png)

***

### first-line

Digunakan untuk memberikan _style_ pada baris pertama suatu elemen.

```html
<p>
  Memikirkanmu sudah menjadi kebiasaan <br>
  Memimpikanmu adalah kecanduan <br>
  Dan mencintaimu adalah konsekuensi yang tak terhindarkan
</p>
```

```css
p::first-line {
  color: red;
}
```

Hasilnya.

***

![First Line]({{ site.baseurl }}/assets/img/css/pseudo-element/first-line.png)

***

### before

Digunakan untuk menambah konten pada awal konten elemen.

Misalnya untuk menambahkan teks sebelum konten pada setiap tag `<h1>`.

Property yang digunakan adalah `content`  dengan nilai dapat berupa teks, url, dsb.

```html
<h1>Satu</h1>
<h1>Dua</h1>
<h1>Tiga</h1>
```

```css
h1::before {
  content: 'Judul ';
}
```

Hasilnya.

***

![Before]({{ site.baseurl }}/assets/img/css/pseudo-element/before.png)

***

### After

Digunakan untuk menambah konten pada akhir konten elemen.

Misalnya untuk menambahkan teks setelah konten pada setiap tag `<h1>`.

```html
<h1>Satu</h1>
<h1>Dua</h1>
<h1>Tiga</h1>
```

```css
h1::after {
  content: ' Judul';
}
```

Hasilnya.

***

![After]({{ site.baseurl }}/assets/img/css/pseudo-element/after.png)

***

## Referensi

Masih ada lagi macam-macam jenis pseudo-element pada CSS, untuk lebih lengkapnya saya sudah menyiapkan tautan berikut:

<a href="https://www.w3schools.com/css/css_pseudo_elements.asp" target="_blank">CSS Pseudo Element</a>