# Generated by Django 3.2.16 on 2023-04-11 22:56

import apps.blog.models
import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.SlugField(max_length=255, unique=True)),
                ('thumbnail', models.ImageField(upload_to=apps.blog.models.blog_thumbnail_directory)),
                ('excerpt', models.CharField(max_length=255)),
                ('description', ckeditor.fields.RichTextField()),
                ('published', models.DateTimeField(default=django.utils.timezone.now)),
                ('views', models.IntegerField(blank=True, default=0)),
                ('time_read', models.IntegerField()),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='category.category')),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
        migrations.CreateModel(
            name='ViewCount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.CharField(max_length=255)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blogpost_view_count', to='blog.post')),
            ],
        ),
    ]