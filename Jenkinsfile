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
               sh 'npm run-script build'
               // sh 'rm -rf /usr/share/nginx/html/*'
              
            }
        }
        stage('Delivery') {
            steps {
                //sh 'npm run deploy'
                sh 'cp -r /var/lib/jenkins/workspace/eletronic-store-front/build/*  /usr/share/nginx/html/'
                echo "Deployed react app"
            }
        }
        
    }
}