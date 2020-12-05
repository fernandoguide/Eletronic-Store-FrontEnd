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
               // sh 'sudo su - rm -rf /usr/share/nginx/html/*'
              
            }
        }
        stage('Delivery') {
            steps {
                //sh 'npm run build:prod'
                //sh 'npm run deploy'
                // sh 'sudo su -'
                sh 'rm -rf /usr/share/nginx/html/*'
                sh 'cp -r /var/lib/jenkins/workspace/eletronic-store-front/build/*  /usr/share/nginx/html/'
                echo "Deployed react app"
            }
        }
        
    }
}