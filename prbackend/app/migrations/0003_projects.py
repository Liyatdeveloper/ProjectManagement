# Generated by Django 4.2.4 on 2023-09-28 11:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_user_desigination_user_empid_user_fullname_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(default='', max_length=200)),
                ('img', models.ImageField(upload_to='images/')),
                ('description', models.TextField()),
                ('status', models.CharField(default='', max_length=200)),
                ('empID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.user')),
            ],
        ),
    ]
