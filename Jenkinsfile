pipeline {

    agent any
    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
               // sh 'npm run-script build'
                sh 'sudo rm -rf /usr/share/nginx/html/*'
               // sh 'npm run-script build'
            }
        }
        stage('Delivery') {
            steps {
                //sh 'npm run deploy'
                sh 'sudo cp -r /var/lib/jenkins/workspace/eletronic-store-front/build/*  /usr/share/nginx/html/'

                echo "Deployed react app"
            }
        }
        
    }
}