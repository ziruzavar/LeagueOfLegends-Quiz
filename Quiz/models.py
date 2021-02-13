from django.db import models


class TextQuestion(models.Model):
    name = models.CharField(max_length=150)
    fi_choice = models.CharField(max_length=100)
    se_choice = models.CharField(max_length=100)
    th_choice = models.CharField(max_length=100)
    fo_choice = models.CharField(max_length=100)
    answer = models.CharField(max_length=100)
