# Facts on climate: Web core

This repository contains the core part of our websites with climate change infographics. The mission of the whole project is to change how people talk and think about climate change and climate policies. The deployed websites can be found on [faktaoklimatu.cz](https://faktaoklimatu.cz) (in Czech, currently the biggest site), [faktyoklime.sk](https://faktyoklime.sk) (in Slovak) and [factsonclimate.org](https://factsonclimate.org) (in English, currently only a titlepage placeholder).

## Interaction with the localized repository

This repository (_web-core_) cannot (!) be built as is. It is just the core web skeleton meant to be checked out as a submodule by one of the localized repositories ([web-cz](https://github.com/faktaoklimatu/web-cz), [web-sk](https://github.com/faktaoklimatu/web-sk), [web-en](https://github.com/faktaoklimatu/web-en)). The localized repository contains the actual web content (texts, infographics, ...) while web-content provides the HTML structure. The actual build always takes place in the web-core directory, the content is only sym-linked to the folders in the parent (localized) repository.

* The localized repository always has web-core linked as a _git submodule_. That means each commit of the localized repository is bound to a particular commit of web-core.
* Therefore, if you advance web-core, this advancement will be seen as a change of a virtual file _web-core_ in the localized repository (in diff, you can see to what commit was the submodule moved).
* Note that different localized repositories (or even different branches within the same repository) can bind to different commits of web-core.
* For convenience, all Make targets in the localized repository have updating web-core as a pre-condition. Thus, building the web _from the localized repository_ always moves web-core as necessary.
  * Note: This is not done if you call Make from within web-core.
* Apart from sym-linking the content to the parent (localized) repository, several files are generated based on templates and language-specific settings in the parent repository (e.g., `_config.yml`, `humans.txt` and others).

More tips and tricks for efficient development can be found in the [Notion document](https://www.notion.so/faktaoklimatu/Workflow-GitHub-4c5b294731dc4f9a8b2203daefcff432).

## Local website build

To build the website, a Linux environment is advisable (WSL in Windows 10 is sufficient). Currently tested systems are Ubuntu 20.10+, Fedora 33+ and Windows 10 WSL-1. There are two options to build the website: local installation or container-based installation. Don't mix local and container-based build. If you do, you may need to hard-clean the build using `make clean-build`.

### Local installation

The local installation has the following prerequisites:

* Ruby developer environment (`ruby-dev`)
* GNU Make (`make`, often included in meta-packages such as `build-essential`)
* Jekyll and Bundler (`jekyll`, `bundler`)
* Inkscape of version 1.0 or higher (`inkscape`)
* ImageMagic (`imagemagick`)

In Ubuntu 20.10 or higher, you can install all dependencies with `sudo apt install jekyll ruby bundler inkscape build-essential`. After installation, you can build the website by running `make local -j4` in the _parent localized repository_.

### Container-based installation

* For container management, use [Podman](https://podman.io) or [Docker](https://www.docker.com/)
* If your distribution uses SELinux, you may need to adjust the folder's security context with `sudo chcon -Rt container_file_t .`
* For local website serve and container management, use the Make targets `container`, `build-container` and `delete-container` in the _parent localized repository_
