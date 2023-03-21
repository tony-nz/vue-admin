Currently working on filtering the form to show allowed fields only

# vue-admin

# Future notes

We need to guard googleUserId for students, staff, etc
Remove googleUser data on verify
Add timestamps to logmodule

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Permission example

```
<div v-permission="'subject-list'">yes</div>
```
