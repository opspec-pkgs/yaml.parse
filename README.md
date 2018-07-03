[![Build Status](https://travis-ci.org/opspec-pkgs/yaml.parse.svg?branch=master)](https://travis-ci.org/opspec-pkgs/yaml.parse)

# Problem statement

parses [yaml](http://yaml.org/)

# Format

the op uses [![opspec 0.1.5](https://img.shields.io/badge/opspec-0.1.5-brightgreen.svg?colorA=6b6b6b&colorB=fc16be)](https://opspec.io/0.1.5) definition format

# Example usage

## Install

```shell
opctl op install github.com/opspec-pkgs/yaml.parse#1.0.0
```

## Run

```
opctl run github.com/opspec-pkgs/yaml.parse#1.0.0
```

## Compose

```yaml
op:
  ref: github.com/opspec-pkgs/yaml.parse#1.0.0
  inputs:
    yaml:
  outputs:
    result:
```

# Support

join us on
[![Slack](https://opctl-slackin.herokuapp.com/badge.svg)](https://opctl-slackin.herokuapp.com/)
or
[open an issue](https://github.com/opspec-pkgs/yaml.parse/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see
[project/CONTRIBUTING.md](https://github.com/opspec-pkgs/project/blob/master/CONTRIBUTING.md)
