Messenger backend

This part consist Django app with Django rest framework.

For start project use next command:<br>
1. Install docker for you local machine.
2. `sudo docker-compose up -d --build`
3. `sudo docker-compose exec web python manage.py migrate --noinput`
4. `sudo docker-compose exec web python manage.py createsuperuser`

If you need see logs use next command:
    `sudo docker-compose logs -f web`