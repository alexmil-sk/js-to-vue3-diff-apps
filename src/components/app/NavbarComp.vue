<template>
  <nav class="navbar navbar-dark navbar-expand-sm bg-primary fs-4">
    <div class="container-fluid">
      <router-link class="navbar-brand " to="/">PORTFOLIO</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              JS
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="http://js-basic-geekbrains.webtest-sk.ru/" target="_blank">Задачи JS Basic</a>
              </li>
              <li>
                <a class="dropdown-item" href="http://js-advanced-geekbrains.webtest-sk.ru/" target="_blank">Задачи JS Advanced</a>
              </li>
              <li>
                <a class="dropdown-item" href="http://charts.webtest-sk.ru/" target="_blank">Графики Криптовалюты 2 (JS)</a>
              </li>
              <li>
                <a class="dropdown-item" href="http://instruments-web-projects.webtest-sk.ru/" target="_blank">Таймер/Калькулятор дат (JS)</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              VueJS
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link class="dropdown-item" to="/riddles">Загадки (Vue)</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/guess-one">Угадай число (Vue)</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/guess-two">Угадай число мультиплеер (Vue)</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/gen-psw">Генератор паролей (Vue)</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/charts">Графики Криптовалюты (Vue)</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              ReactJS
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item" href="http://react-vite-asteroid.webtest-sk.ru/" target="_blank">Armageddon (React, React-Router-Dom, CSS)</a>
              </li>
              <li>
                <a class="dropdown-item" href="http://photo-gallery-react-sass.webtest-sk.ru/" target="_blank">Photo Gallery (React, SASS)</a>
              </li>
              <li>
                <a class="dropdown-item" href="http://reac-todo-locstor-tailwind.webtest-sk.ru/" target="_blank">TodoApp (React, LocStorage, Tailwind)</a>
              </li>
              <li>
                <a class="dropdown-item" href="http://reac-todo-locstor-tailwind-redux.webtest-sk.ru/" target="_blank">TodoApp (React, Redux, LocStorage, Tailwind)</a>
              </li>
              <li>
                <a class="dropdown-item" href="http://react-redux-ts-persist-shop.webtest-sk.ru/" target="_blank">Mini iShop (React, Redux, Persist, TypeScript)</a>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
