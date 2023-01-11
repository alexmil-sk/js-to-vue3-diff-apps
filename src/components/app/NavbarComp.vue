<template>
  <nav class="navbar navbar-dark navbar-expand-sm bg-primary fs-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">PORTFOLIO</router-link>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              JS
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a
                  class="dropdown-item"
                  href="http://js-basic-geekbrains.webtest-sk.ru/"
                  target="_blank"
                  >Tasks JS Basic</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="http://js-advanced-geekbrains.webtest-sk.ru/"
                  target="_blank"
                  >Tasks JS Advanced</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="http://charts.webtest-sk.ru/"
                  target="_blank"
                  >Cryptocurrency Charts 2 (JS)</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="http://instruments-web-projects.webtest-sk.ru/"
                  target="_blank"
                  >Timer/Date Calculator (JS)</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              VueJS
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a
                  class="dropdown-item"
                  href="http://vue3-axios-firebase-users-database.webtest-sk.ru/"
                  target="_blank"
                  >Users Database (Vue, Firebase, Axios, CSS)</a
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/riddles"
                  >Riddles (Vue)</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/guess-one"
                  >Guess the number (Vue)</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/guess-two"
                  >Guess the number multiplayer (Vue)</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/gen-psw"
                  >Password Generator (Vue)</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/charts"
                  >Cryptocurrency Charts (Vue)</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ReactJS
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a
                  class="dropdown-item"
                  href="http://react-vite-asteroid.webtest-sk.ru/"
                  target="_blank"
                  >Armageddon (React, React-Router-Dom, CSS)</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="http://react-redux-toolkit-ts-router-burger.webtest-sk.ru/"
                  target="_blank"
                  >iBurger Shop (React, React-Router-Dom v.6, Redux Toolkit,
                  TypeScript)</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="http://photo-gallery-react-sass.webtest-sk.ru/"
                  target="_blank"
                  >Photo Gallery (React, SASS)</a
                >
              </li>
							<li>
                <a
                  class="dropdown-item"
                  href="http://react-router65-axios-api-coffee.webtest-sk.ru/"
                  target="_blank"
                  >Coffee Gallery (React, React-Router-Dom v.6.5, axios, firebase-auth v.9, tailwind, mock api)</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="http://reac-todo-locstor-tailwind.webtest-sk.ru/"
                  target="_blank"
                  >TodoApp (React, LocStorage, Tailwind)</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="http://reac-todo-locstor-tailwind-redux.webtest-sk.ru/"
                  target="_blank"
                  >TodoApp (React, Redux, LocStorage, Tailwind)</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="http://react-redux-ts-persist-shop.webtest-sk.ru/"
                  target="_blank"
                  >Mini iShop (React, Redux, Persist, TypeScript)</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
