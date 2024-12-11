---
layout: page
title: About
permalink: /about/
weight: 3
---

# **Sobre Mi**

Hola! mi nombre es **{{ site.author.name }}** :wave:,<br>
Soy estudiande de Fisica y Ciencia de Datos en la Universidad de Buenos Aires. Ambas carreras las considero no tanto como carreras, sino como hobbies. Ambas carreras dan herramientas que se complementan, ya que la forma de pensar el analisis de una gran cantidad de datos esta intimamente ligada a como se piensan las teorias en fisica (a al menos esta es mi visión).

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>