FROM ubuntu:focal

LABEL name="Facts on Climate" \
      maintainer="info@factsonclimate.org" \
      summary="Jekyll deployment with Inkscape and ImageMagick for the various Facts on Climate websites" \
      usage="docker run --name factsonclimate -p 4000:4000 -v $PWD/..:/srv/jekyll -it factsonclimate"

ARG DEBIAN_FRONTEND=noninteractive
RUN apt update && \
    apt install --assume-yes software-properties-common && \
    add-apt-repository --yes ppa:inkscape.dev/stable && \
    apt install --assume-yes --no-install-suggests --no-install-recommends \
        build-essential git imagemagick inkscape libffi-dev ruby-bundler ruby-dev zlib1g-dev

EXPOSE 4000
VOLUME /srv/jekyll
WORKDIR /srv/jekyll

CMD ["make", "-j4", "local"]
