Forge Beacon
============
We want to give guests arriving at the Forge by Pillar in Columbus the ability to 1) confirm they have arrived at the correct place and 2) check in when they arrive and indicate who they are here to see. When a guest checks in, the appropriate parties will be notified to come meet the guest.

This process consists of two parts:

1. A [Physical Web](https://google.github.io/physical-web/) beacon broadcasts a URL to smartphone users arriving at the Forge.
2. The URL broadcast by the beacon points to a web address of the check-in system. <b>This project is the web check-in system.</b>

Technologies Used
---------------
This project consists of a [Node.js](https://nodejs.org) site and accompanying tests/test modules.

Setup
---------------
To set up the project:
* Install node.js with npm.
* Install dependencies via <code>npm install [-g]</code>
* Make a copy the file .envtemplate and name it .env, then fill in the parameters as needed (<b>Do not edit or rename</b> the .envtemplate file).

<b>Note:</b> Be sure to keep package.json up-to-date when adding new modules to the project via <code>npm install $PACKAGE --save-dev</code>
