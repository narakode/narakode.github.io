---
layout: post
title: "Belajar CSS : Mengatur Jarak Spasi Teks"
date: 2021-10-18 07:00:00 +0700
cover: css-mengatur-jarak-spasi-teks.png
thumb: css-mengatur-jarak-spasi-teks.png
categories: css
---

[Spasi Teks]({{ page.url }}) - Spasi adalah daerah kosong yang digunakan sebagai jarak pemisah huruf, kata, atau baris.

Spasi dapat diatur dengan CSS melaui propert-properti yang sudah disediakan.

Langsung saja mari kita simak penjelasan di bawah ini.

## Mengatur Jarak Spasi Antar Kata

Untuk mengatur jarak spasi antar kata, gunakan properti `word-spacing`, dengan nilai satuan ukuran seperti px, rem, dsb.

Contoh.

```css
p {
  word-spacing: 25px;
}
```

***

![Word Spacing]({{ site.baseurl }}/assets/img/css/spacing/word-spacing.png)

***

## Mengatur Jarak Spasi Antar Huruf

Untuk mengatur jarak spasi antar huruf, gunakan properti `letter-spacing`, dengan nilai satuan ukuran seperti px, rem, dsb.

Contoh.

```css
p {
  letter-spacing: 10px;
}
```

***

![Letter Spacing]({{ site.baseurl }}/assets/img/css/spacing/letter-spacing.png)

***

## Mengatur Jarak Spasi Antar Baris

Untuk mengatur jarak spasi antar baris, gunakan properti `line-height`, dengan nilai satuan ukuran seperti px, rem, dsb.

Contoh.

```css
p {
  line-height: 10px;
}
```

***

![Line Height]({{ site.baseurl }}/assets/img/css/spacing/line-height.png)

***

## Referensi

Untuk penjelasan lebih lengkap, kunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css_text_spacing.asp" target="_blank">CSS Spacing</a>