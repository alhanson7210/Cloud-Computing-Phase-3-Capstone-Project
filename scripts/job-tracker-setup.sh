#! /bin/bash

# setting env vars
export PROJECT_ID=$GOOGLE_CLOUD_PROJECT
export GH_ACTN_OIDC_SA=<service-account-name>
export GH_ACTN_OIDC_POOL=<worker-pool-name>
export GH_ACTN_OIDC_PROVIDER=<workload-provider-name>
export GH_REPO="<github-repository>"


# services to enable
gcloud services enable artifactregistry.googleapis.com containerregistry.googleapis.com storage.googleapis.com cloudbuild.googleapis.com run.googleapis.com cloudfunctions.googleapis.com secretmanager.googleapis.com iam.googleapis.com iamcredentials.googleapis.com firebasestorage.googleapis.com firestore.googleapis.com

# creating a service account for gh action workflow
gcloud iam service-accounts create ${GH_ACTN_OIDC_SA} --project ${PROJECT_ID} --description "Github Service Account for configuring OIDC in GCP to enable use of gcloud in Github actions"  --display-name "Github Actions OIDC Service Account" 

# start - grant permissions to service account 
gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/logging.logWriter"

gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/iam.serviceAccountUser"

gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/artifactregistry.writer"

gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/storage.admin"

gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/storage.objectAdmin"

gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/secretmanager.secretAccessor"

gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/cloudbuild.builds.builder"

gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/cloudfunctions.developer"

gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/run.developer"

gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/firebase.admin"

gcloud projects add-iam-policy-binding ${PROJECT_ID} --member "serviceAccount:${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --role "roles/secretmanager.admin"
# end grant permissions to service account 

# create the github action workload identity pool
gcloud iam workload-identity-pools create ${GH_ACTN_OIDC_POOL} --project=${PROJECT_ID} --location="global" --display-name="GH Workload Identity Pool" 

# save the workload identity pool ID
export GH_ACTN_OIDC_POOL_ID=$(gcloud iam workload-identity-pools describe ${GH_ACTN_OIDC_POOL} --project=${PROJECT_ID} --location="global" --format="value(name)") 

# create the github action oidc provider in the github action pool
gcloud iam workload-identity-pools providers create-oidc ${GH_ACTN_OIDC_PROVIDER} --project=${PROJECT_ID} --location="global" --workload-identity-pool=${GH_ACTN_OIDC_POOL} --display-name="GH Actions OIDC Provider" --attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.repository=assertion.repository" --issuer-uri="https://token.actions.githubusercontent.com"

# allow authentications from the Workload Identity Provider originating from the GH Repo to impersonate the Service Account
gcloud iam service-accounts add-iam-policy-binding "${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com" --project=${PROJECT_ID} --role="roles/iam.workloadIdentityUser" --member="principalSet://iam.googleapis.com/${GH_ACTN_OIDC_POOL_ID}/attribute.repository/${GH_REPO}"

# save the Workload Identity Provider resource name
export GH_ACTN_OIDC_PROVIDER_ID=$(gcloud iam workload-identity-pools providers describe ${GH_ACTN_OIDC_PROVIDER} --project=${PROJECT_ID} --location="global" --workload-identity-pool=${GH_ACTN_OIDC_POOL} --format="value(name)")

# view the pool and provider
echo $GH_ACTN_OIDC_PROVIDER_ID
echo ${GH_ACTN_OIDC_SA}@${PROJECT_ID}.iam.gserviceaccount.com