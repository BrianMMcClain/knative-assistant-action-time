knative-assistant-action-time
===

This is an example action for the [Knative Assistant](https://github.com/BrianMMcClain/dialogflow-demo) that was built to be ran as a [riff function](https://projectriff.io/)

Deploying the Function
---

Assuming have [Knative](https://github.com/knative/) and riff installed and configured, the function can be deployed with a single command:

```
riff function create time --git-repo https://github.com/BrianMMcClain/knative-assistant-action-time --image <REGISTRY_USERNAME>/knative-assistant-action-time --verbose
```

Replacing `<REGISTRY_USERNAME>` with your configured username