<template>
  <div class="contentWrap">
    <div class="content">
      <div class="center">
        <h1>Игра "Отгадай загадки"</h1>
        <div class="box">

					if(isset($_GET['userAnswer1']) || isset($_GET['userAnswer2']) || isset($_GET['userAnswer3']) || isset($_GET['userAnswer4'])) {

						$userAnswer = $_GET["userAnswer1"];
						$score = 0;
						if($userAnswer == 'парта' || $userAnswer == 'кульман') {
							$score++;
						}

						$userAnswer = $_GET["userAnswer2"];
						if ($userAnswer == 'слоненок' || $userAnswer == 'слоник') {
							$score++;
						}

						$userAnswer = $_GET["userAnswer3"];
						if ($userAnswer == '1' || $userAnswer == 'одна') {
							$score++;
						}

						$userAnswer = $_GET["userAnswer4"];
						if ($userAnswer == '50' || $userAnswer == 'пятьдесят') {
							$score++;
						}

						echo "Вы угадали загадок: ".$score;
					}

          <form method="GET">
            <p>Какой стол не имеет ног?</p>
            <input type="text" name="userAnswer1">
            <p>Маленький, серенький на слона похож. Кто это?</p>
            <input type="text" name="userAnswer2">
            <p>У семерых братьев по сестре. Сколько всего сестер?</p>
            <input type="text" name="userAnswer3">
            <p>На руках десять пальцев. Сколько пальцев на десяти руках?</p>
            <input type="text" name="userAnswer4">
            <br>
            <input type="submit" value="Ответить" name="">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RiddlesComp.vue"
}
</script>

<style scoped>

</style>
