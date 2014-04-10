# robbinsd/oauthd

Dockerfile for a containerized version of [oauthd](https://www.npmjs.org/package/oauthd).

## Startup Instructions

First start a redis container, then link it to our oauthd container. Viz:

```
docker run --name redis dockerfile/redis &
docker run --name oauthd --link redis:redis -p 6284:6284 robbinsd/oauthd &
```

After that, you can visit [http://localhost:6284/admin]() to access the oauthd admin interface.

## Notes

* If you are running Docker on a Mac, you may want to map port 6284 from your VM running docker (e.g. boot2docker) to the host.
