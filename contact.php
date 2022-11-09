<?php $title = "Page Contact" ; ?>
<?php require_once "header.php" ; ?>

<section class="mrt-1 w-80">
        <div class="row w-100 p-0">
          <div class="col-sm-5 p-0">
            <h3>NOS COORDONNEES</h3>
            <hr style="border-bottom: 3px solid #daa520; border-radius: 3px" class="m-3"/>
            <div class="pl-3">
              <p class="m-0"><b>Studio Sport & Coaching</b></p>
              <p class="m-0">01 Allée Marie Politzer</p>
              <p class="m-0">64200 Biarritz</p>
              <br>
              <p class="m-0"><b>Télephone</b></p>
              <p><a href="tel:+05 .59 .47 .84 .18">05 59 47 84 18</a></p>
              <br>
              <p class="m-0"><b>Horaires</b></p>
              <p class="m-0">Du lundi au vendredi</p>
              <p class="m-0">de 8h à 14h, de 16h à 20h</p>
              <p class="m-0">Le samedi</p>
              <p class="m-0">de 9h a 13h</p>
              <br>
              <p class="m-0"><b>Email</b></p>
              <p class="m-0"><a href="mailto:studiobiarritz.com">studiobiarritz.com</a></p>
              <p class="m-0">ou via ce formulaire.</p>
            </div>
          </div>
          <div class="col-sm-7 p-0 ma">
          <h3>FORMULAIRE DE CONTACT</h3>
          <hr style="border-bottom: 3px solid #daa520; border-radius: 3px" class="m-3"/>

          <?php if (isset($_GET["add"]) && $_GET["add"] == 1) : ?>
              <div class="alert alert-success">Formulaire envoyé avec success.</div>
              <?php elseif (isset($_GET["add"]) &&  $_GET["add"] == 0) :  ?>
              <div class="alert alert-danger">Formulaire non envoyé.</div>
          <?php endif ; ?> 

            <div class="pl-3">
              <form method="POST" action="verif_contact.php" id="myForm">
                <div class="row mb-4">
                  <div class="col-7">
                    <div class="form-outline">
                      <input type="text" name="nom" id="nom" class="form-control gray" placeholder="NOM"/>
                      <label class="form-label" for="nom"></label>
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="form-outline">
                      <input type="text" name="prenom" id="prenom" class="form-control gray" placeholder="PRENOM"/>
                      <label class="form-label" for="prenom"></label>
                    </div>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-8">
                    <div class="form-outline">
                      <input type="email" name="email" id="email" class="form-control gray" placeholder="EMAIL"/>
                      <label class="form-label" for="email"></label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="form-outline">
                      <input type="tel" name="number" id="number" class="form-control gray" placeholder="TELEPHONE"/>
                      <label class="form-label" for="number"></label>
                    </div>
                  </div>
                </div>
                <!-- Text input -->
                <div class="form-outline mb-4">
                  <input type="text" name="sujet" id="sujet" class="form-control gray" placeholder="SUJET"/>
                  <label class="form-label" for="sujet"></label>
                </div>
                <!-- Message input -->
                <div class="form-outline mb-4">
                  <textarea class="form-control gray" placeholder="Message" name="message" id="message" rows="4"></textarea>
                  <label class="form-label" for="message"></label>
                </div>
                  <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block mb-4">ENVOYER</button>
              </form>
            </div>
          </div>
        </div>
    </section>
<?php require_once "footer.php" ; ?>