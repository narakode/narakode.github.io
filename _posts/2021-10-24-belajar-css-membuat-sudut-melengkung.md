---
layout: post
title: "Belajar CSS : Membuat Sudut Melengkung"
date: 2021-10-24 08:00:00 +0700
cover: membuat-sudut-melengkung-css.png
thumb: membuat-sudut-melengkung-css.png
categories: css
---

[Sudut Melengkung]({{ page.url }}) - Sudut melengkung pada elemen dapat membuat tampilan elemen menjadi lebih menarik dan tidak terkesan kaku.

Untuk membuatnya, CSS sudah menyediakan properti khusus, yaitu __border-radius__.

Langsung saja berikut adalah cara pembuatanya.

## Membuat Sudut Melengkung

Untuk membuat sudut melengkung, anda dapat menggunakan properti __border-radius__, dengan nilai satuan ukuran.

Semakin besar nilainya semakin melengkung efek yang dihasilkan.

Contoh.

```css
.kotak {
  background-color: red;
  width: 200px;
  height: 100px;
  padding: 20px;
  /* border */
  border-radius: 10px;
 }
```

***

![Border Radius]({{ site.baseurl }}/assets/img/css/border-radius/1.png)

***

## Membuat Sudut Melengkung Pada Sudut Tertentu

Anda juga dapat membuat lengkungan pada sudut tertentu saja, terdapat 4 properti yang dapat digunakan.

* `border-top-left-radius`, sudut atas kiri
* `border-top-right-radius`, sudut atas kanan
* `border-bottom-left-radius`, sudut bawah kiri
* `border-bottom-right-radius`, sudut bawah kanan

```css
.kotak {
  background-color: red;
  width: 200px;
  height: 100px;
  padding: 20px;
  /* border */
  border-top-left-radius: 10px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 10px;
}
```

***

![Border Radius]({{ site.baseurl }}/assets/img/css/border-radius/2.png)

***

## Referensi

Untuk pembahasan lebih lanjut, anda dapat mengunjungi tautan berikut.

<a href="https://www.w3schools.com/css/css3_borders.asp" target="_blank">CSS Rounded Corners</a>