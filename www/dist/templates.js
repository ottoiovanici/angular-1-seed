angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('footer.html','<footer style="background: dimgrey; height: 100px; position: absolute; bottom: 0px; width: 100%;">\n    <div class="container">\n        <p><h5 style="color: #fff;"><a href="http://iovanici.com">iovanici.com</a></h5></p>\n    </div>\n</footer>\n');
$templateCache.put('header.html','<div class="container">\n  <nav class="navbar navbar-inverse">\n    <div class="container-fluid">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"\n                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href="#">Brand</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav">\n          <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>\n          <li><a href="#">Link</a></li>\n          <li class="dropdown">\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"\n               aria-expanded="false">Dropdown <span class="caret"></span></a>\n            <ul class="dropdown-menu">\n              <li><a href="#">Action</a></li>\n              <li><a href="#">Another action</a></li>\n              <li><a href="#">Something else here</a></li>\n              <li role="separator" class="divider"></li>\n              <li><a href="#">Separated link</a></li>\n              <li role="separator" class="divider"></li>\n              <li><a href="#">One more separated link</a></li>\n            </ul>\n          </li>\n        </ul>\n        <form class="navbar-form navbar-left">\n          <div class="form-group">\n            <input type="text" class="form-control" placeholder="Search">\n          </div>\n          <button type="submit" class="btn btn-default">Submit</button>\n        </form>\n        <ul class="nav navbar-nav navbar-right">\n          <li><a href="#">Link</a></li>\n          <li class="dropdown">\n            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"\n               aria-expanded="false">Dropdown <span class="caret"></span></a>\n            <ul class="dropdown-menu">\n              <li><a href="#">Action</a></li>\n              <li><a href="#">Another action</a></li>\n              <li><a href="#">Something else here</a></li>\n              <li role="separator" class="divider"></li>\n              <li><a href="#">Separated link</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n</div>\n');
$templateCache.put('home.html','<div class="container">\n  <div class="panel panel-default">\n    <div class="panel-heading">Ala bala portocala</div>\n    <div class="panel-body">\n      Ala bala portocala\n    </div>\n  </div>\n</div>\n\n');}]);