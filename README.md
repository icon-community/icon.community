

<p align="center">
    <img src="./static/assets/images/icon/logo-light.png" alt="ICON Logo" width="250px"></img>
</p>
<div align="center">
    <a align="center" href='https://icon.community/'><button type='button' style='font-weight:semibold; background:#30AAAE; border-radius:5px; border:0px; box-shadow:1px; padding:4px 6px; color:white; cursor:pointer; '>Visit icon.community</button></a>
</div>

<h1 align="center">icon.community – The Official ICON Community Website</h1>

<h3 align="center">
    The icon.community website is the main hub to direct members of the ICON ecosystem to available resources. This site includes blogs, links to other media, and general information about the ICON community!    
</h3>
<p align="center">
   <a href="https://twitter.com/helloiconworld"><img src="https://img.shields.io/twitter/follow/helloiconworld?style=social"></a></br>
    <a href="https://icon.community/icondiscord"><img src="https://img.shields.io/discord/880651922682560582?label=Discord&logo=Discord&style=social"></a></br>
    <a href="https://www.youtube.com/channel/UCI7Z_1sTKN-kCVgFD2a0GXQ"><img src="https://img.shields.io/youtube/channel/subscribers/UCI7Z_1sTKN-kCVgFD2a0GXQ?style=social"></a>
   
</p>

# Table of Contents

1. [Setting up your development environment](#setting-up-your-development-environment)
2. [Contributing Code](#contributing-code)
2. [Guidelines for contributing](#guidelines-for-contributing)

# Setting up your development environment

## Install Hugo

This repository contains the code and assets for the [icon.community](https://icon.community) site. To preview the site in a local environment, you'll need to install the Hugo static site generator.

Hugo supports multiple platforms including macOS, Windows, and Linux.

### macOS and Linux

For macOS and Linux users, we recommend using Homebrew to install Hugo.

```
brew install hugo
```

### Windows

For Windows users, we recommend using Chocolatey to install Hugo.

```
choco install hugo -confirm
```

### How to Preview the Site Locally

After installing Hugo, navigate to the project directory and install the npm dependencies with the command below.

```
npm install
```

Once the dependencies have been installed, run the command below to start a local Hugo server.

```
hugo server
```

Whenever you make a change to the site code or content, Hugo will automatically rebuild the site.

## Shortcodes

The icon.community site is equipped with a variety of shortcodes that can be used with content files.

* [discord](#discord)
* [table](#table)

### discord

This shortcode inserts an anchor element with the href attribute set to an invite link for the ICON Discord.

```
{{< discord >}}

// Output

<a href="https://discord.com/invite/7a75Hf3cFm">Discord</a>
```

```
{{< discord linkText="Join the ICON Discord!" >}}

// Output

<a href="https://discord.com/invite/7a75Hf3cFm">Join the ICON Discord!</a>
```

### table

This shortcode converts a Markdown table to an HTML table.

```
{{< table >}}
| Header A | Header B |
|----------|----------|
| Lorem    | Ipsum    |
| Foo      | Bar      |
{{< /table >}}

// Output

<div class="overflow-x-auto">
    <table>
        <thead>
            <tr>
                <th>Header A</th>
                <th>Header B</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
            </tr>
            <tr>
                <td>Foo</td>
                <td>Bar</td>
            </tr>
        </tbody>
    </table>
</div>

```

## Redirects

Redirects are located in the `./static/_redirects` file. To add a redirect, simply add a new line containing the old URL, new URL, and HTTP status code (optional). If no HTTP status code is specified, Netlify will automatically use 301 for the status code.

### Examples

```
# Redirect /old-url to /new-url with 301 status code.
/old-url /new-url 301

# Redirect /old-url to https://icon.foundation with 302 status code.
/old-url https://icon.foundation

# Redirect /old-file.pdf to /new-file.pdf with 301 status code.
/old-file.pdf /new-file.pdf


```
# Contributing Code

If you want to contribute, start working through the icon.community repository, navigate to the Github "issues" tab and start looking through issues. We recommed issues labeled "good first issue". These are issues that we believe are particularly well suited for newcomers. If you decide to start on an issue, leave a comment so that other people know that you're working on it. If you want to help out, but not alone, use the issue comment thread to coordinate.

Please see the [ICON Foundation Development Guidelines](https://github.com/icon-project/community/blob/main/guidelines/technical-development/development-guidelines.md)
for information regarding our development standards and practices.

# Guidelines for contributing

The following is a set of guidelines for contributing to icon.community.

These guidelines are subject to change. Feel free to propose changes to this document in a pull request.

## Contribute to icon.community with these steps

To work on icon.community, you'll need to have a GitHub account, regardless of whether you're contributing to the site, creating content, or fixing issues.

All updates and changes must be made using the GitHub pull request (PR) process. Essentially, you will create a local copy of the website, make your modifications, and request to merge your changes. If you're not familiar with this process, you can find instructions in this icon.community README.md file.

It's not necessary to request permission to work on anything, but it's always smart to inform the main icon.community contributors of your plans. You can do this by commenting on an issue or PR on [GitHub](https://github.com/icon-community/icon.community/), or by reaching out to them on the [ICON Discord server](http://localhost:1313/icondiscord).

## How decisions about the site are made

Decisions regarding ICON's PRs, design evolution, and major upgrades are made by core icon.community contributors, in collaboration with the broader ICON team.

Community input is valued highly and all ICON community members are encouraged to raise any questions or submit PRs.

## First time contributing?

Discover suggested contributions in the icon.community GitHub [Issues](https://github.com/icon-community/icon.community/issues) tab. Issues labeled with good first issue offer up great suggestions for new contributors to get started with!

For more information on how to contribute to open source projects, check out [How to Contribute to Open Source](https://github.com/icon-community/icon.community/issues).

## Code of Conduct

The icon.community project is governed by the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md). Participants are expected to uphold this code.

## Questions

> **Note:** Github Issues are reserved for feature requests and bug reporting. Please don't create a new Github issue to ask a question.

We have a vibrant developer community and several community resources to ask questions in.

### Community Resources

* [Github Discussions](https://github.com/icon-community/icon.community/discussions)
* [ICON Official Discord](https://icon.community/icondiscord)