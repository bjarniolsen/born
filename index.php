<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>

<!-- // TODO: REMOVE THIS // -->
		<meta name="robots" content="noindex">
<!-- ////// -->

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Billedkunst for børn | Sassi Bischoff</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="static/css/normalize.min.css">
		<link rel="stylesheet" href="static/css/main.css">

        <!--[if lt IE 9]>
            <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
            <script>window.html5 || document.write('<script src="js/vendor/html5shiv.js"><\/script>')</script>
        <![endif]-->
    </head>
    <body>

        <div class="header-container">
            <header class="wrapper clearfix" role="banner">
                <h1 class="title" role="heading" aria-level="1">Billedkunst for børn</h1>
				<p>Og et slogan måske</p>
                <!--<nav role="navigation">
                    <ul>
                        <li><a href="#">nav ul li a</a></li>
                        <li><a href="#">nav ul li a</a></li>
                        <li><a href="#">nav ul li a</a></li>
                    </ul>
                </nav>-->
            </header>
        </div>

		<main class="main-container" role="main">
            <div class="main wrapper clearfix">

				<section aria-labelledby="section-heading-ws-1">
                    <h2 id="section-heading-ws-1" role="heading" aria-level="2">Workshop 1</h2>
                    <p><!--img src="static/img/_sassi-bischoff.jpg" alt="Sassi Bischoff" width="100" height="120" /-->Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam bibendum iaculis libero, eget molestie nisl pharetra in. In semper consequat est, eu porta velit mollis nec.</p>
				</section>
				<section aria-labelledby="section-heading-ws-2">
                    <h2 id="section-heading-ws-2" role="heading" aria-level="2">Workshop 2</h2>
                    <p><!--img src="static/img/_sassi-bischoff.jpg" alt="Sassi Bischoff" width="100" height="120" /-->Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam bibendum iaculis libero, eget molestie nisl pharetra in. In semper consequat est, eu porta velit mollis nec.</p>
				</section>
				<section aria-labelledby="section-heading-subscribe">
                    <h2 id="section-heading-subscribe" role="heading" aria-level="2">Tilmelding</h2>

                    <form action="subscribe.php" name="workshops" id="workshop" method="post">
						<input type="hidden" name="price" value="50"/>
						<fieldset>
							<legend class="visuallyhidden">Personlige oplysninger</legend>
							<label>
								<span>Email adresse</span>
								<input type="text" name="email" placeholder="ditnavn@mail.dk" />
							</label>
							<label>
								<span>Mobilnummer</span>
								<input type="text" name="phone" placeholder="12345678" />
							</label>
						</fieldset>

						<fieldset>
							<legend class="visuallyhidden">Vælg workshop</legend>
							<label>
								<input type="checkbox" name="checkbox[0]" /> <!-- checked="checked"-->
								<span>Vælg workshop 1</span>
							</label>
							<div class="form-group" id="0">
								<label>
									<span>Barnets navn</span>
									<input type="text" name="workshop[0][0][childname]" placeholder="Dit barns navn" />
								</label>
								<label>
									<span>Barnets alder</span>
									<select name="workshop[0][0][childage]">
										<option value="5">5 år</option> 
										<option value="6">6 år</option>
										<option value="7">7 år</option>
									</select>
								</label>
								<a href="#" class="add-person">tilmeld flere børn</a>
							</div>

							<label>
								<input type="checkbox" name="checkbox[1]" />
								<span>Vælg workshop 2</span>
							</label>
							<div class="form-group" id="1">
								<label>
									<span>Barnets navn</span>
									<input type="text" name="workshop[1][0][childname]" placeholder="Dit barns navn" />
								</label>
								<label>
									<span>Barnets alder</span>
									<select name="workshop[1][0][childage]">
										<option value="8">8 år</option> 
										<option value="9">9 år</option>
										<option value="10">10 år</option>
									</select>
								</label>
								<a href="#" class="add-person">tilmeld flere børn</a>
							</div>
						</fieldset>
						<fieldset>
							<legend class="visuallyhidden">Personlig besked</legend>
							<label>
								<span>Skriv eventuelt en besked hvis du vil tilføje noget...</span>
								<textarea name="message" placeholder="Personlig besked"></textarea>
							</label>
						</fieldset>
						<div class="buttons">
							<input type="submit" value="Tilmeld" />
						</div>
					</form>

					<div class="thank-you hide">
						<h2>Tak for tilmeldingen</h2>
						<p>Bla bla</p>
					</div>

				</section>

                <aside>
                    <h3 role="heading" aria-level="3">Sassi Bischoff</h3>
                    <p><!--img src="static/img/_sassi-bischoff-sm.jpg" alt="Sassi Bischoff" width="200" height="297" /-->Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam bibendum iaculis libero, eget molestie nisl pharetra in. In semper consequat est, eu porta velit mollis nec. Curabitur posuere enim eget turpis feugiat tempor. Etiam ullamcorper lorem dapibus velit suscipit ultrices.</p>
                </aside>

            </div> <!-- #main -->
        </main> <!-- #main-container -->

        <div class="footer-container">
            <footer class="wrapper" role="contentinfo">
                <h3 role="heading" aria-level="3">footer</h3>
            </footer>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

        <script src="static/js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-9647211-1','auto');ga('send','pageview');
        </script>
    </body>
</html>
<!--
<label>
	<span>Barnets navn</span>
	<input type="text" name="workshop[0][1][childname]" placeholder="Dit barns navn" />
</label>
<label>
	<span>Barnets alder</span>
	<select name="workshop[0][1][childage]">
		<option value="5">5 år</option> 
		<option value="6">6 år</option>
		<option value="7">7 år</option>
	</select>
</label>
-->
