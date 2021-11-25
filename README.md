## FastBoot Server for Google Cloud

This is a server for hosting Ember apps in Fastboot mode on Google Cloud. It was based on Fastboot AWS. Be sure to have a project and a bucket created in Google Cloud.

### Prepare Google Cloud

All you need is to have a Project created.

### Configuring server

In most cases you only have to customize this server by changing `env_variables` in `app.yaml` to your needs.

* `GCLOUD_PROJECT`: set the value of this variable to your project's on Google Cloud.  
* `FASTBOOT_GCS_BUCKET`: this should be set to the bucket in Google Cloud to which the assets should be uploaded.

### Deploying server

You need to have [Google Cloud SDK](https://cloud.google.com/sdk/) installed. Then run:

```
gcloud app deploy
```

Check that your project target is correct when you're prompt for confirmation. You might have to manually set the target project by running:

```
gcloud config set project <project name>
```

### Deploying your application

This server will observe when a new version of your application was deployed to the bucket by checking `fastboot-release.json`. Check out [ember-cli-deploy-gcloud](https://github.com/EmberSherpa/ember-cli-deploy-gcloud) for more details on how to deploy your application to Google Cloud so this server can find it.
