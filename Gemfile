source "https://rubygems.org"

# Usa lo stesso set di gemme di GitHub Pages, così l'anteprima locale
# corrisponde a ciò che verrà pubblicato online.
# Per l'anteprima locale:  bundle install  &&  bundle exec jekyll serve
gem "github-pages", group: :jekyll_plugins

# Necessaria con le versioni recenti di Ruby per `jekyll serve`
gem "webrick", "~> 1.8"

group :jekyll_plugins do
  gem "jekyll-seo-tag"
end

# Windows e JRuby non includono i file zoneinfo
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
