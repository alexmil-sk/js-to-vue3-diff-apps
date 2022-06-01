<template>
  <nav class="navbar navbar-dark navbar-expand-sm bg-primary fs-4">
    <div class="container-fluid">
      <router-link class="navbar-brand " to="/">PORTFOLIO</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Empty</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Игры
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><router-link class="dropdown-item" to="/riddles">Загадки</router-link></li>
              <li><router-link class="dropdown-item" to="/guess-one">Угадай число</router-link></li>
              <li><router-link class="dropdown-item" to="/guess-two">Угадай число мультиплеер</router-link></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Разное
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><router-link class="dropdown-item" to="/gen-psw">Генератор паролей</router-link></li>
              <li><a class="dropdown-item" href="#">Пусто</a></li>
              <li><a class="dropdown-item" href="#">Пусто</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
