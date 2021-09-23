---
layout: post
title: "Belajar Pemformatan Teks Pada HTML"
date: 2021-09-23 08:00:00 +0700
cover: pemformatan-teks-html.png
thumb: pemformatan-teks-html-thumb.png
categories: html
---

[Pemformatan Teks]({{ page.url }}) - Pemformatan teks adalah cara untuk mengubah gaya atau tampilan pada sebuah teks. Seperti menjadikanya tebal, miring, bergarisbawah, dsb.

Pemformatan teks bisa dilakukan pada HTML dengan tag-tag tertentu, seperti tag `<b>` untuk menebalkan teks, tag `<i>` untuk memiringkan teks, dsb.

Untuk lebih lanjut mari kita simak pembahasanya berikut.

## Menebalkan Teks

Terdapat dua buah tag untuk membuat teks menjadi tebal, yaitu tag `<b>` (bold) dan `<strong>`.

Perbedaan kedua tag tersebut terdapat pada penekanya, tag `<strong>` memberi penekanan lebih kepada teks didalamnya, sedangkan tag `<b>` hanya sekedar menebalkan teks saja.

```html
<p>
  Tag bold berfungsi untuk <b>menebalkan suatu teks</b>, begitu juga tag strong, tapi dia juga <strong>memberi penekanan</strong> lebih pada teks didalamnya.
</p>
```

***

![Menebalkan Teks]({{ site.baseurl }}/assets/img/pemformatan-teks/menebalkan-teks.png)

***

## Memiringkan Teks

Untuk memiringkan teks, terdapat dua tag yang dapat digunakan, yaitu tag `<i>` (italic) dan `<em>` (emphasize).

Tidak hanya memiringkan teks, tag `<em>` juga digunakan untuk memberi penekanan lebih kepada teks didalamnya.

```html
<p>
  Tidak hanya <i>memiringkan teks</i>, tag emphasize juga digunakan untuk memberi <em>penekanan lebih</em> kepada teks didalamnya.
</p>
```

***

![Memiringkan Teks]({{ site.baseurl }}/assets/img/pemformatan-teks/memiringkan-teks.png)

***

## Menggarisbawahi Teks

Untuk menggarisbawahi teks, gunakan tag `<u>` (underline) dan `<ins>` (insert).

Selain menggarisbawahi teks, tag `<ins>` juga digunakan untuk menjunjukan teks yang baru disisipkan kedalam konten web.

```html
<p>
  Tag <u>underline</u> digunakan untuk mengarisbawahi teks, begitu juga <ins>tag insert</ins>.
</p>
```

***

![Menggarisbawahi Teks]({{ site.baseurl }}/assets/img/pemformatan-teks/menggarisbawahi-teks.png)

***

## Mencoret Teks

Terdapat dua tag untuk mencoret teks yaitu tag `<s>` (striketrough) dan `<del>` (delete).

Selain mencoret teks, tag `<del>` juga digunakan untuk menunjukan teks yang telah dihapus dari konten web.

```html
<p>
  Selain <s>mencoret</s> teks, tag delete juga digunakan untuk menunjukan <del>teks yang telah dihapus dari konten web</del>.
</p>  
```

***

![Mencoret Teks]({{ site.baseurl }}/assets/img/pemformatan-teks/mencoret-teks.png)

***

## Menandai Teks

Untuk menandai teks, gunakan tag `<mark>`.

Teks yang ditandai akan memiliki tampilan seperti menggunakan stabilo.

```html
<p>
  Gunakan tag mark untuk <mark>menandai teks</mark>.
</p>
```

***

![Menandai Teks]({{ site.baseurl }}/assets/img/pemformatan-teks/menandai-teks.png)

***

## Mengecilkan Teks

Untuk mengecilkan teks, gunakan tag `<small>`.

Teks akan diperkecil dari ukuran normal. 

```html
<p>
  Untuk <small>mengecilkan teks</small>, gunakan tag small.
</p>
```

***

![Mengecilkan Teks]({{ site.baseurl }}/assets/img/pemformatan-teks/mengecilkan-teks.png)

***

## Membuat Pangkat

Untuk membuat pangkat gunakan tag `<sup>` (superscript) dan tag `<sub>` (subscript).

Tag `<sup>` untuk membuat pangkat atas, dan tag `<sub>` untuk membuat pangkat bawah.

```html
<p>
  4<sup>2</sup> = 16 <br>
  Karbon dioksida CO<sub>2</sub>
</p>
```

***

![Membuat Pangkat]({{ site.baseurl }}/assets/img/pemformatan-teks/membuat-pangkat.png)

***

## Referensi

Silakan kunjungi tautan berikut untuk penjabaran lebih lanjut.

<a href="https://www.w3schools.com/html/html_formatting.asp" target="_blank">HTML Text Formatting</a>