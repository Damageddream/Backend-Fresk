# Generated by Django 4.1 on 2022-11-03 14:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('freskbackend', '0005_aktualnosci_downloads_aktualnosci_images'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='aktualnosci',
            name='downloads',
        ),
        migrations.RemoveField(
            model_name='aktualnosci',
            name='images',
        ),
    ]